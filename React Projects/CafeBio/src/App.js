import React, { useEffect, useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
  useParams,
  useNavigate,
} from "react-router-dom";
import { Myprofile } from "./components/myprofile/myprofile";
import Promolist from "./components/promolist/promolist";
import "./App.css";
import Createpromoitem from "./components/createpromoitem/createpromoitem";
import CreateSocialMediaItem from "./components/createsocialmedia/createsocialmedia";
import RedemptionScreen from "./components/RedemptionScreen/RedemptionScreen";
import CompletionScreen from "./components/CompletionScreen/CompletionScreen";
import MasterPage from "./components/MasterPage/MasterPage";
import Mypromos from "./components/mypromos/mypromos";
import Home from "./components/home/home";
import BetaSignUp from "./components/betasignup/betaSignup";
import SimpleHeader from "./components/Header/SimpleHeader";
import Signup from "./components/signup/signup";
import ProfileEditor from "./components/ProfileEditor/ProfileEditor";
import StoresScreen from "./components/storesScreen/storesScreen";
import InsightsScreen from "./components/insightsScreen/insightsScreen";
import { auth, database, dbget, dbref } from "./objects/dataobject";
import { AppContext } from "./AppContext";
import Updatepromoitem from "./components/updatepromoitem/updatepromoitem";
import PricingTable from "./components/PricingTable/PricingTable";
import CreateLinkForm from "./components/CreateLinkForm/CreateLinkForm";

const Root = () => {
  const { appUserID, setAppUserID, appMerchantHandle, setAppMerchantHandle } =
    useContext(AppContext);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user.uid;
        setAppUserID(userId);
        const merchantHandleRef = dbref(database, `users/${userId}/info`);
        try {
          const snapshot = await dbget(merchantHandleRef);
          if (snapshot.exists()) {
            setAppMerchantHandle(snapshot.val().merchantHandle);
          } else {
            // Handle the case where merchantHandle does not exist
          }
        } catch (error) {
          console.error("Error fetching merchant handle:", error);
        }
      } else if (!params) {
        navigate("/signup");
      }
    });

    return () => unsubscribe();
  }, [setAppUserID, setAppMerchantHandle, navigate, params]);

  return (
   
      <div>
        <Outlet />
      </div>
  
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="beta" element={<SimpleHeader child={<BetaSignUp />} />} />
      <Route path=":id" element={<Promolist />} />
      <Route path="newpromo" element={<MasterPage child={<Createpromoitem />} />} />
      <Route path="newsocial" element={<MasterPage child={<CreateSocialMediaItem />} />} />
      <Route path="newlink" element={<MasterPage child={<CreateLinkForm />} />} />
      {/* <Route path="newdiscount" element={<MasterPage child={<CreateDiscountItem />} />} /> */}
      <Route path="stores" element={<MasterPage child={<StoresScreen />} />} />
      <Route
        path="insights"
        element={<MasterPage child={<InsightsScreen />} />}
      />
      <Route
        path="account"
        element={<MasterPage child={<ProfileEditor />} />}
      />
      <Route path="signup" element={<SimpleHeader child={<Signup />} />} />
      <Route path="plans" element={<SimpleHeader child={<PricingTable />} />} />
      <Route path="campaigns" element={<MasterPage child={<Mypromos />} />} />
      <Route path="r/:merchanthandle/:promo" element={<RedemptionScreen />} />
      <Route
        path="complete/:merchanthandle/:redeemguid"
        element={<CompletionScreen />}
      />
      <Route
        path="update-promo"
        element={<MasterPage child={<Updatepromoitem />} state={true} />}
      />
    </Route>
  )
);

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    const initGoogleAnalytics = () => {
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src =
        "https://www.googletagmanager.com/gtag/js?id=G-PQM2MCWJ91";
      document.head.appendChild(gtagScript);

      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PQM2MCWJ91');
      `;
      document.head.appendChild(inlineScript);

      return () => {
        document.head.removeChild(gtagScript);
        document.head.removeChild(inlineScript);
      };
    };

    initGoogleAnalytics();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
