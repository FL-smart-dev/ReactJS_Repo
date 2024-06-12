import React, { useEffect, useState, useContext } from "react";
import styles from "./mypromos.module.css";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { deletePromoMessage } from "../../utils/api.services";
import { promoPath } from "../../utils/promo-constants";
import PromoItem from "../promoItem/promoItem";
import { AppContext } from "../../AppContext";
import { dbref, dbOnValue, database } from "../../objects/dataobject";

//TODO: MOVE to app path constants file
const INSIGHTS_PATH = "/insights";

function Mypromos() {
  const [promoList, setPromoList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [promoToDelete, setPromoToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(8);
  const { appMerchantHandle } = useContext(AppContext);
  const navigate = useNavigate();

  const getAllPromos = (merchant) => {
    let tempPromoArray = [];
    const merchantsRef = dbref(database, promoPath(merchant));
    dbOnValue(merchantsRef, (snapshot) => {
      snapshot.forEach((promo) => {
        tempPromoArray.push(promo.val());
      });
      setPromoList(tempPromoArray);
    });
  };

  useEffect(() => {
    getAllPromos(appMerchantHandle);
  }, [appMerchantHandle]);

  const deletePromo = (event, promo) => {
    event.stopPropagation();
    setPromoToDelete(promo);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    deletePromoMessage(
      promoToDelete.item.merchantname,
      promoToDelete.item.promoname,
      promoToDelete.item
    );
    getAllPromos(promoToDelete.item.merchantname);
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const editPromo = (event, promo) => {
    event.stopPropagation();
    console.log(promo);
    return navigate("/update-promo", { state: promo }); // Pass promo as state
  };

  const filterPromos = (status) => {
    setFilterStatus(status);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPromos = promoList.filter((item) => {
    const query = searchQuery.toLowerCase();
    const {
      promoname,
      promotitle,
      campaign_name,
      promomessage,
      status,
      dateend,
    } = item;

    return (
      ((promoname && promoname.toLowerCase().includes(query)) ||
        (promotitle && promotitle.toLowerCase().includes(query)) ||
        (campaign_name && campaign_name.toLowerCase().includes(query)) ||
        (promomessage && promomessage.toLowerCase().includes(query))) &&
      (filterStatus === "ALL" ||
        status === filterStatus ||
        (filterStatus === "EXPIRED" && new Date(dateend) < new Date()))
    );
  });

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredPromos.length / entriesPerPage);

  // Calculate indexes for slicing entries for the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredPromos.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  // Counting active, expired, and disabled promos
  const activePromosCount = promoList.filter(
    (item) => item.status === "ACTIVE"
  ).length;
  const expiredPromosCount = promoList.filter(
    (item) => new Date(item.dateend) < new Date()
  ).length;
  const disabledPromosCount = promoList.filter(
    (item) => item.status === "DISABLED"
  ).length;

  // Function to handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.promosContainer}>
      <h1 className={styles.heading}>Campaigns</h1>

      <div className={styles.tableContainer}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Campaign name"
            value={searchQuery}
            onChange={handleSearch}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.filterButtons}>
          <button
            onClick={() => filterPromos("ALL")}
            className={filterStatus === "ALL" ? styles.activeFilter : ""}
          >
            All
          </button>
          <button
            onClick={() => filterPromos("ACTIVE")}
            className={filterStatus === "ACTIVE" ? styles.activeFilter : ""}
          >
            Active ({activePromosCount})
          </button>
          <button
            onClick={() => filterPromos("EXPIRED")}
            className={filterStatus === "EXPIRED" ? styles.activeFilter : ""}
          >
            Expired ({expiredPromosCount})
          </button>
          <button
            onClick={() => filterPromos("DISABLED")}
            className={filterStatus === "DISABLED" ? styles.activeFilter : ""}
          >
            Disabled ({disabledPromosCount})
          </button>
        </div>

        <table className={styles.promosTable}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Title</th>
              <th>Message</th>
              <th>Created</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Button Text</th>
              <th>Terms</th>
              <th>Limit</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((item, index) => {
              const isExpired =
                filterStatus === "EXPIRED" &&
                new Date(item.dateend) < new Date();
              const dotColor = isExpired
                ? "red"
                : item.status === "ACTIVE"
                ? "green"
                : item.status === "DISABLED"
                ? "orange"
                : "red";
              const rowClass =
                index % 2 === 0 ? styles.grayRow : styles.whiteRow;

              // Extracting last 5 digits of the ID
              const promoId = item.promoname.slice(-5);

              if (
                filterStatus === "ALL" ||
                item.status === filterStatus ||
                isExpired ||
                item.status === "DISABLED"
              ) {
                return (
                  <tr
                    key={item.promoname}
                    className={`${styles.promoRow} ${rowClass}`}
                    onClick={() =>
                      navigate(`${INSIGHTS_PATH}?promoId=${item.promoname}`, {
                        state: { item },
                      })
                    }
                  >
                    <td>
                      <span className={styles.dot} style={{ color: dotColor }}>
                        &bull;
                      </span>
                      <span className={styles.blue}>{promoId}</span>
                    </td>
                    <td>{item.campaign_name}</td>
                    <td>{item.promotitle}</td>
                    <td>{item.promomessage}</td>
                    <td>{item.date_created}</td>
                    <td>{item.datestart}</td>
                    <td>{item.dateend}</td>
                    <td>{item.promobuttontext}</td>
                    <td>{item.promoterms}</td>
                    <td>{item.redemptionlimit}</td>
                    <td>{item.status}</td>
                    <td>
                      {item.status === "ACTIVE" ? (
                        <button
                          className={`${styles.buttonWithMargin} ${styles.greenButton}`}
                          onClick={(event) => editPromo(event, { item })}
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          className={`${styles.buttonWithMargin} ${styles.redButton}`}
                          onClick={(event) => deletePromo(event, { item })}
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <span>
          Showing {indexOfFirstEntry + 1} to{" "}
          {Math.min(indexOfLastEntry, filteredPromos.length)} of{" "}
          {filteredPromos.length} entries
        </span>
        <div>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? styles.activePage : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Confirmation modal */}
      {showConfirmation && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p>Are you sure you want to delete this promo?</p>
              <button className={`${styles.redButton}`} onClick={confirmDelete}>Yes</button>
              <button className={`${styles.greenButton}`} onClick={cancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Mypromos.propTypes = {};

export default Mypromos;

