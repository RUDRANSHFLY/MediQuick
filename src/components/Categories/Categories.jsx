import React from 'react';
import "../Categories/Categories.scss";
import "../Categories/CategoriesUtil.scss";
import { Link } from 'react-router-dom'


const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row cate">
                    <img src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/c4162b4ec00938379d15b2719577457e.png?dim=96x0" alt="" srcSet="" />
                    <Link className='link' to='/products/3'>
                        <button>
                            Personal Care
                        </button>
                    </Link>
                </div>

                <div className="row cate">
                    <img src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/7e6ed82a2c373d1db2ea81a09e2fbb4c.png?dim=96x0" alt="" srcSet="" />

                    <Link className='link' to='/products/2'>
                        <button>
                            SkinCare
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="row cate">
                    <img src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/37ebeeb109543b779c568444f7ce84be.png?dim=96x0" alt="" srcSet="" />

                    <Link className='link' to='/products/2'>
                        <button>
                            NEW SEASON
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row cate">
                            <img src="https://images.pexels.com/photos/286951/pexels-photo-286951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="" />

                            <Link className='link' to='/products/1/'>
                                <button>
                                    Medicines
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row cate">
                            <img src="https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="" />
                            <Link className='link' to='https://skknbykim.com/'>
                                <button>ACCESORIES</button>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="row cate">
                    <img src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/01abb07c5b233f90b2cd0b64a7ebccee.png?dim=96x0" alt="" srcSet="" />
                    <Link className='link' to='https://www.who.int/'>
                        <button>info</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Categories;