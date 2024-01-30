import React from 'react';
import '../styles/faq.css';
import { useState, useEffect, useRef } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

const FAQ = () => {
  const faqData=[ // array of objects
    {
      question:"What are your gym’s operating hours?",
      answer:"Adrenaline Fitness is open from 5AM- 11PM on all days except on public holidays."
    },
    {
      question:"Can I freeze or cancel my membership?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question:"What makes Adrenaline stand out from other gyms in the area?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question:"What are your membership options and fees?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question:"What amenities and facilities does the gym offer?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question:"Do you offer any trial memberships or guest passes?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question:"Are there any fitness programs or challenges available?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question:"What is the policy on personal trainers and training sessions?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
  ]
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownRef = useRef(null)
  const [dropdownIcon, setDropdownIcon] = useState(false);
  
  const toggleDropdown = (index) => {
    console.log("clicked!")
    setActiveIndex((prev)=>(
      prev===index?null:index
    ))
    setDropdownIcon(!dropdownIcon);

  }

  const handleOutsideClick = (event) => {
    console.log(event.target.className);
    if(dropdownRef.current && !dropdownRef.current.contains(event.target) && event.target.className!=='question'){
      setActiveIndex(null);
    }
  }

  useEffect(()=>{
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    };

  }, [dropdownRef]);


  return (
    <div className="faqSection">
      <div className="faqHeader">Questions? Look here</div>
      <div className="faqTagline">Can't find an answer? Call us at +917347780917 or email adrenalinefitness@gmail.com</div>
      
      {faqData.map((item,index)=>(
        <div>
          <div key={index} className="question" onClick={()=>toggleDropdown(index)}>
            {item.question} {dropdownIcon && activeIndex===index?<TiArrowSortedUp className="arrowIcon"/> : <TiArrowSortedDown className="arrowIcon"/>}
            </div>
            {
              <div className={`answer`} style={{display:activeIndex===index && activeIndex!==null?'':'none'}} ref={dropdownRef}>
                {item.answer}</div>
            }
        </div>
      ))}
    </div>
  )
}

export default FAQ