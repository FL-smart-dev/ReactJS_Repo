import React, { useEffect, useState, useContext, Profiler } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { dbref, dbOnValue, database } from "../../objects/dataobject";
import { getDatabase, ref, query, orderByChild, limitToFirst, startAt, endAt } from "firebase/database";
import styles from "./insightsScreen.module.css";
import { basePath } from "../../utils/sessions-constants";
import { analyticsPath } from "../../utils/sessions-constants";
import { AppContext } from "../../AppContext";
import { Divider, Typography, Table, Card } from "antd";
import { Line } from '@ant-design/plots';
import moment, { Moment } from 'moment';

import PromoItem from "../promoItem/promoItem";
import { redemptions } from "../../utils/AppStrings";
import { equalTo } from "firebase/database";

function InsightsTable() {
  const [sessions, setSessions] = useState([]);
  const [promos, setPromos] = useState([]);
  const [selectedPromoDetails, setSelectedPromoDetails] = useState(null);
  const { appMerchantHandle } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [numUsers, setNumUsers] = useState(0);
  const [numRedemptions, setNumRedemptions] = useState(0);
  const [numNewUsers, setNumNewUsers] = useState(0);
  const [numViews, setNumViews] = useState(0);
  const [graphData, setGraphData] = useState([{ day: '03/05', value: 3 }]);
  
  useEffect(() => {
    getAllRedemptions('maltesecafe');
    // getAllRedemptions(appMerchantHandle);
  }, [appMerchantHandle]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const promoId = queryParams.get("promoId");
    const selectedPromo = promos.find((promo) => promo.promoId === promoId);
    setSelectedPromoDetails(selectedPromo || null);

    // Scroll to the selected promo item
    const promoItem = document.getElementById(`promoItem-${promoId}`);
    if (promoItem) {
      promoItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [location.search, promos]);

  const getAllRedemptions = (merchant) => {
    const tempSessionsArray = [];
    const tempPromosArray = [];
    const temppromos = [];
    let num = 0;
    const promosRef = dbref(database, analyticsPath(merchant));

    dbOnValue(promosRef, (snapshot) => {
      snapshot.forEach((promo) => {
        const promoId = promo.key;
        const redemptionRef = dbref(
          database,
          analyticsPath(merchant) + `/${promoId}/redemptions`
        );

        dbOnValue(redemptionRef, (redemptionSnapshot) => {
          redemptionSnapshot.forEach((redemption) => {
            tempSessionsArray.push({
              ...redemption.val(),
              key: `${promoId}-${redemption.key}`,
              promoId: promoId,
            });
          });

          tempPromosArray.push({ promoId, ...promo.val() });
        });
      });
      setPromos(tempPromosArray);
    });
  };

  const handlePromoItemClick = (promoId, promoDetails) => {
    const queryParams = new URLSearchParams(location.search);
    const currentPromoId = queryParams.get("promoId");
    if (currentPromoId !== promoId) {
      setSelectedPromoDetails(promoDetails);

      const promoRef = dbref(
        database,
        basePath('maltesecafe') + `/analytics/records/promo-loaded`
      );

      let promoquery1 = query(promoRef, orderByChild("promo/promoId"));
      let promoquery2 = query(promoquery1, equalTo(promoId))
      let numNewUsers = 0, numRedemptions = 0;
      let obj = {};
      let values = {};
      const data = [{day: moment(promoDetails.datestart).format("MM/DD"), value: 0}, {day: moment(promoDetails.dateend).format("MM/DD"), value: 0}];

      dbOnValue(promoquery2, (snapshot) => {
        snapshot.forEach((item)=> {
          let item_val = item.val();
          obj[item_val.promo.customer_group_id] = item_val.promo;
          // data.push({date: moment(item_val.promo.datestart).format("MM/DD"), })
          if(item_val.promo.redemptions != null || item_val.promo.redemptions != undefined) {
            item_val.promo.redemptions && Object.values(item_val.promo.redemptions).forEach((redemption)=>{
              let key = moment(redemption.redeemedAt).format("MM/DD");

              if(!values[key]) values[key] = 0;
              values[key]++;
              numRedemptions++;

              if(redemption.isNewUser == true) numNewUsers++;
            })
          }
        })
        setNumNewUsers(numNewUsers);
        setNumRedemptions(numRedemptions);
        setNumUsers(Object.keys(obj).length);
        console.log("Snapshot Val", snapshot.val())
        snapshot.val() ? setNumViews(Object.keys(snapshot.val()).length) : setNumViews(0);
        const filteredSessions = {};

        Object.values(obj).forEach((item)=>{
          item.redemptions && Object.values(item.redemptions).forEach((redemption)=>{
            filteredSessions[redemption.customerGroupId] = {
              "isNewUser" : redemption.isNewUser,
              "redeemedAt" : redemption.redeemedAt,
              "phoneNumber" : redemption.phoneNumber,
            }
          })
        })
        setSessions(Object.values(filteredSessions));
      })

      var sortedKeys = Object.keys(values).sort();
      

      sortedKeys.forEach((key)=>{
        data.push({day: key, value: values[key]})
      })
      console.log("data---------", data)
      setGraphData(data);
      queryParams.set("promoId", promoId);
      navigate(`${location.pathname}?${queryParams.toString()}`);
    }
  };

  const columns = [
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      className: styles.phoneCell,
    },
    {
      title: "Date Redeemed",
      dataIndex: "redeemedAt",
      key: "redeemedAt",
      className: styles.redeemedAt,
    },
    {
      title: "New Customer",
      dataIndex: "isNewUser",
      key: "isNewUser",
      render: (isNewUser) => <span>{isNewUser ? "Yes" : "No"}</span>,
    },
  ];

  const { Text, Title } = Typography;

  const campaignLists = promos.map((promo)=> {
    if(promo.promotitle) return(
      <div style={{display: "block", width: "100%", borderBottom: "1px black solid"}}>
        <div key={promo.promoId} onClick={() => handlePromoItemClick(promo.promoId, promo)} className={styles.card}>
          <Text style={{fontSize: "18px"}}>{promo.promotitle}</Text>
          <Text style={{fontSize: "12px"}} type="success">{promo.status}</Text>
          <Text style={{fontSize: "12px"}}>{promo.datestart}</Text>
        </div>
      </div>
    )
  })

  const Graph = (props) => {
    let { data } = props;
    console.log("Graph Data", data);
    const config = {
      data,
      xField: 'day',
      yField: 'value',
      yAxis: {
        min: 0, // Set the minimum value for y-axis
        max: 10, // Set the maximum value for y-axis
      },
      point: {
        shapeField: 'circle',
        sizeField: 4,
      },
      interaction: {
        tooltip: {
          marker: false,
        },
      },
      style: {
        lineWidth: 2,
      },
    };
    return <Line {...config} />;
  };

  return (
    <div className={styles.sessionsContainer}>
      <div className={styles.captionContainer}>
        <Title level={2}>Campaign Analytics</Title>
        <Text>See the analytics for each of your campaigns</Text>
      </div>
      <div className={styles.promosAndTableContainer}>
        <div className={styles.promosContainer}>
          <Title level={3}>Campaign Lists</Title>
          {campaignLists}
        </div>
        <div className={styles.tableContainer}>
          {selectedPromoDetails && (
            <div>
              <Text className={styles.subtitle}>
                {selectedPromoDetails.promotitle}
              </Text>
              <br />
              <Text>{selectedPromoDetails.promomessage}</Text>
              <br />
              <Text style={{marginRight: "50px", color: "grey"}}>Created: {selectedPromoDetails.date_created}</Text>
              <Text style={{color: "grey"}}>Active Date: {`${moment(selectedPromoDetails.datestart).format("MM/DD/YYYY")}` + ` - ` + `${moment(selectedPromoDetails.dateend).format("MM/DD/YYYY")}` + ` ( `+`${moment(selectedPromoDetails.dateend).diff(moment(selectedPromoDetails.datestart),"day")}` + ` days ) `} </Text>
              <Divider />
            </div>
          )}
          <div style={{display: "flex"}}>
            <div style={{height: "200px", width: "400px"}}>
              <Graph data={graphData} />
            </div>
            <div style={{display: "flex"}}>
              <div style={{marginRight: "50px", textAlign: "center"}}>
                <Title level={2}>{numRedemptions}</Title>
                <Title level={4}>Redemptions</Title>
                <Text>{`${numViews}` + ` views`}</Text>
              </div>
              <div style={{marginLeft: "50px", textAlign: "center"}}>
                <Title level={2}>{numNewUsers}</Title>
                <Title level={4}>New Customers</Title>
                <Text>{`${numUsers}` + ` Customers`}</Text>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <Title level={3}>Customers</Title>
            <Title level={3}>{moment(Date.now()).month}</Title>
          </div>
          {/* <Table columns={columns} dataSource={filteredSessions} /> */}
          <Table columns={columns} dataSource={sessions} />
        </div>
      </div>
    </div>
  );
}

export default InsightsTable;
