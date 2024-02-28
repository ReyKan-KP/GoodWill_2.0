import React, { useState, useEffect } from "react";
import "./userstyle.css";
import ngos from "./ngoscard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectName, selectEmail } from "../../redux/features/auth/authSlice";
import store from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/useractions";
import GetUserNGO from "../NGO/GetUserNGO";
import axios from 'axios'
// import '../../../../backend/uploads/'

function Userhome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const Email = useSelector(selectEmail);
  console.log(useSelector((state) => state.auth));
  const Logout = () => {
    dispatch(logout());
    navigate("/");
  };


  const props = useParams();
  const [userdata, setuserdata] = useState(null)

  const [userDetails, setuserDetails] = useState({
    profilePic: 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg',
    Email: '',
    details: 'User has no details updated',
    name: 'Name not updated',
    phone: 'Contact details not updated',
    dob: 'xx/xx/xxxx',
  });


  useEffect(() => {
    async function fetchData() {
      console.log("hi");
      const userid = props.id;
      console.log(userid);
      const response = await axios.get(`http://localhost:4000/sitedata/userdetail/${userid}`);
      console.log("data fetched successfully");
      setuserdata(response.data)

      // console.log(response, userdata);


      if (response.data) {
        console.log("no enter in this");
        const responses = await response.data;
        console.log(responses);
        if (responses.profilePic !== '') {
          console.log("image")
        }
        const pic = '';
        console.log("image", pic)
        setuserDetails({
          profilePic: (responses.profilePic == '') ? 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' : responses.profilePic,
          Email: (responses.Email),
          details: (responses.details),
          name: (responses.name),
          phone: (responses.phone),
          dob: (responses.dob)
        });
      }
    }
    console.log("hi Akash");
    fetchData();

  }, [])


  return (
    <div className="body">
      <div className="row profile">
        {/* <div className="col-md-3">
          <div className="col-md-3" style={{ position: "fixed" }}>
            <div className="profile-sidebar">
              <div className="profile-userpic">
                <img
                  src={`http://localhost:4000/uploads/${userDetails.profilePic}`}
                 
                  className="img-responsive"
                  alt=""
                />
              </div>
              <Link to={`/userprofile/${userDetails.name}`} className="profile-usertitle"> 
                <div className="profile-usertitle-name">{userDetails.name}</div>
                <div className="profile-usertitle-job">{userDetails.Email}</div>
              </Link>
      

              <div className="portlet light bordered">
                <div className="row list-separated profile-stat">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="uppercase profile-stat-title"> 37 k </div>
                    <div className="uppercase profile-stat-text">
                      {" "}
                      Donation{" "}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="uppercase profile-stat-title"> 12 </div>
                    <div className="uppercase profile-stat-text">
                      {" "}
                      Campaigns{" "}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="profile-desc-title">About Me</h4>
                  <span className="profile-desc-text">
                    {" "}
                    {userDetails.details}
                  </span>
                  <div className="profile-desc-link mt-2">
                    <i className="fa fa-globe"></i>
                    <Link
                      to="https://www.apollowebstudio.com"
                      className="link">
                      {Email}
                    </Link>
                  </div>
                  <div className="profile-desc-link mt-2">
                    <i className="fa fa-twitter"></i>
                    <Link
                      to="https://www.twitter.com/jasondavisfl/"
                      className="link">
                      {userDetails.phone}
                    </Link>
                  </div>
                  <Link
                    to="/userdetails"
                    state={{ UserloginEmail: Email }}
                    className="text-green-600"
                    >
                    <i className="fa-light fa-pen-to-square"></i> Update your Profile
                  </Link>
                </div>

                <div className="profile-userbuttons">
                  <button
                    type="button"
                    style={{ backgroundColor: "red", color: "white" }}
                    className="btn"
                    onClick={Logout}
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}


<div class="dark:bg-zinc-800">

  <header>
    <nav
      id="sidenav-1"
      class="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 xl:data-[te-sidenav-hidden='false']:translate-x-0"
      data-te-sidenav-init
      data-te-sidenav-hidden="false"
      data-te-sidenav-mode-breakpoint-over="0"
      data-te-sidenav-mode-breakpoint-side="xl"
      data-te-sidenav-content="#content"
      data-te-sidenav-accordion="true">
      <a
        class="mb-3 flex items-center justify-center py-6 outline-none"
        href="#!"
        data-te-ripple-init
        data-te-ripple-color="primary">
        <img
          id="te-logo"
          class="mr-2 w-8"
          src="https://tw-elements.com/img/logo.png"
          alt="TE Logo"
          draggable="false" />
        <span>TW elements</span>
      </a>

      <ul
        class="relative m-0 list-none px-[0.2rem]"
        data-te-sidenav-menu-ref>
        <li class="relative">
          <a
            class="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            href="#!"
            data-te-sidenav-link-ref>
            <span
              class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                     <path
                  d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z" />
              </svg>
            </span>
            <span>Webiste traffic</span></a
          >
        </li>
        <li class="relative">
          <a
            class="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512">         <path
                  d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM208 176c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" />
              </svg>
            </span>
            <span>Settings</span>
            <span
              class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 dark:[&>svg]:fill-gray-300"
              data-te-sidenav-rotate-icon-ref>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">         <path
                  d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </span>
          </a>
          <ul
            class="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
            data-te-sidenav-collapse-ref>
            <li class="relative">
              <a
                class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
                >Profile</a
              >
            </li>
            <li class="relative">
              <a
                class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
                >Account</a
              >
            </li>
          </ul>
        </li>
        <li class="relative">
          <a
            class="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">       <path
                  d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>
            </span>
            <span>Password</span>
            <span
              class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 dark:[&>svg]:fill-gray-300"
              data-te-sidenav-rotate-icon-ref>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                       <path
                  d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </span>
          </a>
          <ul
            class="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
            data-te-sidenav-collapse-ref>
            <li class="relative">
              <a
                class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
                >Request password</a
              >
            </li>
            <li class="relative">
              <a
                class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
                >Reset password</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
 
    <nav
      id="main-navbar"
      class="fixed left-0 right-0 top-0 flex w-full flex-nowrap items-center justify-between bg-white py-[0.6rem] text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700 dark:bg-zinc-700 lg:flex-wrap lg:justify-start xl:pl-60"
      data-te-navbar-ref>
      <div
        class="flex w-full flex-wrap items-center justify-between px-4">
     
        <button
          data-te-sidenav-toggle-ref
          data-te-target="#sidenav-1"
          class="block border-0 bg-transparent px-2.5 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 xl:hidden"
          aria-controls="#sidenav-1"
          aria-haspopup="true">
          <span class="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>

        <form
          class="relative ml-4 mr-auto flex flex-wrap items-stretch xl:mx-0">
          <input
            autocomplete="off"
            type="search"
            class="relative m-0 inline-block w-[1%] min-w-[225px] flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out focus:border-primary-600 focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-200"
            placeholder='Search (ctrl + "/" to focus)' />
          <span
            class="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-700 dark:text-gray-200 [&>svg]:w-4"
            id="basic-addon2">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </span>
        </form>
           <ul class="relative flex items-center">
          <li class="relative" data-te-dropdown-ref>
            <a
              class="mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false">
              <span class="dark:text-gray-200 [&>svg]:w-3.5">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bell"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                </svg>
              </span>
              <span
                class="absolute -mt-2.5 ml-2 rounded-full bg-red-600 px-1.5 py-[1px] text-[0.6rem] text-white"
                >1</span
              >
            </a>
            <ul
              class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="navbarDropdownMenuLink"
              data-te-dropdown-menu-ref>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                  >Some news</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                  >Another news</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                  >Something else here</a
                >
              </li>
            </ul>
          </li>


          <li class="mr-4">
            <a href="#">
              <span
                class="fill-gray-500 hover:fill-gray-700 focus:fill-gray-700 dark:fill-gray-200 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512">
                      <path
                    d="M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6H386.7l42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z" />
                </svg>
              </span>
            </a>
          </li>
          <li class="mr-4">
            <a href="#">
              <span
                class="fill-gray-500 hover:fill-gray-700 focus:fill-gray-700 dark:fill-gray-200 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512">
                    <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
            </a>
          </li>
          <li class="relative" data-te-dropdown-ref>
            <a
              class="mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
              href="#"
              id="navbarDropdown"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false">
              <span
                class="relative inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                <span
                  class="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
              </span>
            </a>
            <ul
              class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="navbarDropdown"
              data-te-dropdown-menu-ref>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref>
                  <span
                    class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                    <span
                      class="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                  </span>
                  <span class="mr-4">English</span>
                  <span
                    class="inline-block fill-green-600 dark:fill-gray-200 [&>svg]:h-3.5 [&>svg]:w-3.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                             <path
                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </span>
                </a>
              </li>
              <li><hr class="my-2" /></li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref>
                  <span
                    class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                    <span
                      class="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-572px_!important]"></span>
                  </span>
                  Polski</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref>
                  <span
                    class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                    <span
                      class="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1196px_!important]"></span>
                  </span>
                  中文</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref>
                  <span
                    class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                    <span
                      class="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-36px_-910px_!important]"></span>
                  </span>
                  日本語</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref>
                  <span
                    class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                    <span
                      class="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1430px_!important]"></span>
                  </span>
                  Deutsch</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref>
                  <span
                    class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                    <span
                      class="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1976px_!important]"></span>
                  </span>
                  Français</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref>
                  <span
                    class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                    <span
                      class="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-0px_-1742px_!important]"></span>
                  </span>
                  Español</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref>
                  <span
                    class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                    <span
                      class="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-884px_!important]"></span>
                  </span>
                  Русский</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref>
                  <span
                    class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                    <span
                      class="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-702px_!important]"></span>
                  </span>
                  Português</a
                >
              </li>
            </ul>
          </li>

     
          <li class="relative" data-te-dropdown-ref>
            <a
              class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                class="rounded-full"
                style="height: 22px; width: 22px"
                alt="Avatar"
                loading="lazy" />
            </a>
            <ul
              class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton2"
              data-te-dropdown-menu-ref>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                  >My profile</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                  >Settings</a
                >
              </li>
              <li>
                <a
                  class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                  >Logout</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
       </nav>
  </header>
  <main style="margin-top: 58px">
    <div class="container"></div>
  </main>
  <footer></footer>

</div>


        <div className="col-md-9">
          <div className="profile-content">
            <h2 className="NgosTitle">Our NGOs</h2>
            <GetUserNGO username={name} userDetails={userdata} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userhome;
