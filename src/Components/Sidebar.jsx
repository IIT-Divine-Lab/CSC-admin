import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      if (location.pathname === "/questions/addquestion") {
         setIsCollapsed(true);
      }
   }, [location.pathname]);

   const handleQuestionsClick = () => {
      setIsCollapsed(false);
      navigate("/questions");
   };

   const handleStudentDataClick = () => {
      setIsCollapsed(false);
      navigate("/Student");
   };

   const handleCategoryClick = () => {
      setIsCollapsed(false);
      navigate("/Category");
   };

   return (
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
         <div className="link-item" onClick={() => navigate("/")}>
            {location.pathname === "/" && <div className="active"></div>}
            <GoHome className="icon" />
            {!isCollapsed && <span className="description">Home</span>}
         </div>
         <div className="link-item" onClick={handleStudentDataClick}>
            {location.pathname === "/Student" && (
               <div className="active"></div>
            )}
            <PiStudentFill className="icon" />
            {!isCollapsed && <span className="description">Student Data</span>}
         </div>
         <div className="link-item" onClick={handleQuestionsClick}>
            {location.pathname === "/questions" && (
               <div className="active"></div>
            )}
            <FaQuestionCircle className="icon" />
            {!isCollapsed && <span className="description">Questions</span>}
         </div>
         <div className="link-item" onClick={handleCategoryClick}>
            {location.pathname === "/Category" && (
               <div className="active"></div>
            )}
            <MdOutlineCategory className="icon" />
            {!isCollapsed && <span className="description">Category</span>}
         </div>
      </div>
   );
};

export default Sidebar;
