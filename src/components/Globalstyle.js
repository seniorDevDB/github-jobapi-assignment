import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .App {
    /* max-width: 960px; */
    margin: 0 auto;
    font-size: 16px;
    color: black;
  }
  
  .top-menubar {
    width: 100%;
    background-color: #5964e0;
    height: 100px;
    padding: 30px 100px 120px 100px;
    border-radius: 0px 0px 0px 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .top-menubar button{
    margin: 0;
  }
  
  .logo {
    color: white !important;
  
  }
  
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }
  
  .section-title {
    margin-top: 30px;
  }
  
  .job-page .job-page-cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
  }
  
  .job-card {
    flex: 0 0 33.33%;
    padding: 10px;
  }
  
  .job-card .job-container {
    background-color: ${({ theme }) => theme.cardBack};
    min-height: 200px;
    padding: 0px 20px 20px;
    border-radius: 10px;
  }

  .job-card a {
    color: ${({ theme }) => theme.cardColor};
  }
  
  .card-link {
    color: inherit;
    text-decoration: none;
  }
  .job-card-company-logo {
    width: 70px;
    height: 70px;
    margin-top: -20px;
    margin-left: 20px;
    border-radius: 15px;
  }
  
  .card-card-title {
    margin-top: 10px;
    margin-bottom: 0;
  }
  
  .searchbar {
    background-color: white;
    display: flex;
    height: 80px;
    border-radius: 10px;
    padding: 20px 30px;
  }
  
  .searchbar-mobile {
    display: none;
  }
  
  .input-group-text {
    border: none;
    color: deepskyblue;
    background-color: transparent;
  }
  
  .searchbar .input-group .form-control {
    border: none;
    outline: none;
  }
  
  .searchbar .input-group b {
    line-height: 42px;
    margin: 0px 10px;
  }
  
  /* Job detail page */

  .job-detail-page {
    max-width: 960px;
    margin: auto;
    padding-bottom: 20px;
  }
  
  .job-detail-page .job-company-detail-section{
    background-color: ${({ theme }) => theme.cardBack};
    color: ${({ theme }) => theme.text};
    height: 200px;
    display: flex;
    margin-top:-30px;
  }

  .job-detail-page .job-company-detail-section .btn-primary {
    color: #0d6efd;
    background-color: #efedff;
    border-color: #efedff;
  }

  .job-detail-page .job-company-logo {
    width: 20%;
  }
  
  .job-detail-page .job-company-logo img{
    width: 100%;
    height: 100%;
  }

  .job-detail-page .job-company-title-section {
    margin-top: auto;
    margin-bottom: auto;
    padding-left:20px;
  }

  .job-detail-page .job-company-button {
    margin-top: auto;
    margin-bottom: auto;
  }
  
  .job-detail-page .job-detail-section {
    background-color: ${({ theme }) => theme.cardBack};
    color: ${({ theme }) => theme.text};
    margin-top: 20px;
    padding: 30px 30px;
  }
  
  .job-detail-page .job-detail-howtoapply-section {
    color: white !important;
    padding: 30px 30px;
    background-color: #0d6efd;
    margin-top: 20px;
  }

  .job-detail-page .job-detail-howtoapply-section a {
    color: white !important;
  }
  
  .job-page {
    padding-left: 10%;
    padding-right:10%;
    margin-top: -40px;
  }
  
  /* Tablets */
  @media (max-width: 1000px) {
    .App {
      max-width: 600px;
    }
  }
  
  /* Mobiles */
  @media (max-width: 640px) {
    .App {
      max-width: 100%;
      padding: 0 15px;
    }
    .job-card {
      flex: 0 0 100%;
      padding: 10px;
    }
  
    .searchbar {
      display: none;
    }
    
    .searchbar-mobile {
      display: flex;
    }
  }  
  `