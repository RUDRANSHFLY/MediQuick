import React from 'react';
import { Link } from 'react-router-dom';
import "../Mcat/Mcat.scss";

const Mcat = () => {
    return (
        <div className='mcat'>
            <div className="cat">
                <Link to="https://medium.com/@kavitamishra2710/why-is-a-full-body-checkup-essential-for-ensuring-optimal-health-ad6eaea40d68">
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0" alt="" />
                </Link>
            </div>
            <div className="cat">
                <Link to='https://medium.com/be-open/cold-season-allies-key-vitamins-and-minerals-92350641e4bc'>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0" alt="" srcset="" />
                </Link>
            </div>
            <div className="cat">
                <Link to='https://diabetes.org/about-diabetes'>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0" alt="" srcset="" />
                </Link>
            </div>
            <div className="cat">
                <Link to='https://www.msdmanuals.com/en-in/home/infections/biology-of-infectious-disease/fever-in-adults'>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0" alt="" srcset="" />
                </Link>
            </div>
            <div className="cat">
                <Link to='https://www.pennmedicine.org/updates/blogs/womens-health'>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0" alt="" srcset="" />
                </Link>
            </div>
            <div className="cat">
                <Link to='https://www.btf-thyroid.org/'>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0" alt="" srcset="" />
                </Link>
            </div>
            <div className="cat">
                <Link to='https://www.who.int/health-topics/coronavirus#tab=tab_1'>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/6b775dd8478-covid.png?dim=256x0" alt="" srcset="" />m
                </Link>
            </div>
            <div className="cat">
                <Link to='https://www.bonehealthandosteoporosis.org/'>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0" alt="" srcset="" />
                </Link>
            </div>
            <div className="cat">
                <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0" alt="" srcset="" />
            </div>
            <div className="cat">
                <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0" alt="" srcset="" />
            </div>
        </div>
    )
}

export default Mcat
