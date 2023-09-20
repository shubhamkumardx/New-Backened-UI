import React from 'react';

function CogsReport(props) {
    return (
        <div>
            <div className='container'>
                <p className='text-start  a2 mt-1 '>Cogs Report</p>
                <p className='a3 text-start  '>Home / <span className='text-secondary' >Cogs Report</span></p >
                <div className='mkl'>
                    <p className='oppo'> Filters</p>
                    <div className='d-flex mt-3'>
                        <select name="language" id="language" className='s8 text-secondary'>
                            <option value="javascript">1</option>
                            <option value="python">2</option>
                            <option value="c++" >3</option>
                            <option value="java" selected >Select Months
                            </option>
                        </select>
                        <select name="language" id="language" className='s4 text-secondary'>
                            <option value="javascript">1</option>
                            <option value="python">2</option>
                            <option value="c++" >3</option>
                            <option value="java" selected>Select Year</option>
                        </select>
                        <select name="language" id="language" className='s4 text-secondary'>
                            <option value="javascript">1</option>
                            <option value="python">2</option>
                            <option value="c++" >3</option>
                            <option value="java" selected>By Order No</option>
                        </select>
                        <select name="language" id="language" className='s4 text-secondary'>
                            <option value="javascript">1</option>
                            <option value="python">2</option>
                            <option value="c++" >3</option>
                            <option value="java" selected>Select product</option>
                        </select>
                        <select name="language" id="language" className='s4 text-secondary'>
                            <option value="javascript">1</option>
                            <option value="python">2</option>
                            <option value="c++" >3</option>
                            <option value="java" selected>Select Customer</option>
                        </select>
                        <button type="button" className="btn btn- s7 text-white">Submit</button>
                        <button type="button" className="btn btn-  s6 text-white">Clear</button>
                    </div>
                    <div className='container'>
                        <table className='mt-5 table'>
                            <tr className='s11 '>
                                <th >Order No</th>
                                <th >Items Name</th>
                                <th >Items Price</th>
                                <th >Items Qty</th>
                                <th >items Tax</th>
                                <th >Total price</th>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Mark johny</td>
                                <td>$223</td>
                                <td>20</td>
                                <td>---</td>
                                <td>$1293</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Mark johny</td>
                                <td>$223</td>
                                <td>20</td>
                                <td>---</td>
                                <td>$1293</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Mark johny</td>
                                <td>$223</td>
                                <td>20</td>
                                <td>---</td>
                                <td>$1293</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Mark johny</td>
                                <td>$223</td>
                                <td>20</td>
                                <td>---</td>
                                <td>$1293</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Mark johny</td>
                                <td>$223</td>
                                <td>20</td>
                                <td>---</td>
                                <td>$1293</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Mark johny</td>
                                <td>$223</td>
                                <td>20</td>
                                <td>---</td>
                                <td>$1293</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Mark johny</td>
                                <td>$223</td>
                                <td>20</td>
                                <td>---</td>
                                <td>$1293</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <br/> <br/> 
            </div>
            <div className='hr_line'></div>
            <p className='p11 text-center mt-2'> Copyright <span className='p12'>Demeter Fragrances.</span> All Rights Reserved</p>
        </div>
    );
}

export default CogsReport;