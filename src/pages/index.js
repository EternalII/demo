import * as React from 'react'
import { useState } from "react";
import Layout from '../components/layout'
import Seo from '../components/seo'
import {statusMenu,transMenu} from './index.module.css' 
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const IndexPage = () => {
  const [StatusName, setStatusName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const status = { StatusName }

  }

const options = [
  'Start', 'Review', 'Deployed'
];
const defaultOption = options[0];


  return (
    <Layout pageTitle="Workflow">
      <p>You can build and organize your a Workflow here.</p>
      <div className={statusMenu}>
        <form onSubmit = {handleSubmit}>
          <label>Add Status: </label>
          <input 
            name="name:" 
            required 
            value={StatusName}
            onChange={(e) => setStatusName(e.target.value)}
            />
            <button>Add</button>
          </form>
          </div>
        <div className={transMenu}>
          <label>Add Transition:</label>
          <br/>
          <input 
            name="name:" 
            required 
            />
            <br/>
            From:
            <Dropdown options={options} value={defaultOption} placeholder="Select an option"/>
            To: <Dropdown options={options} value={defaultOption} placeholder="Select an option"/>
            <button>Add</button>
        </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />

export default IndexPage