import React, { useEffect, useState } from 'react'
import Footer from '../../Component/footer'
import Header from '../../Component/header'
import ControlBar from '../Product/ControlBar'
import blog_1 from '../../Assets/images/blog_1.png'
import blog_2 from '../../Assets/images/blog_2.png'
import blog_3 from '../../Assets/images/blog_3.png'
import blog_4 from '../../Assets/images/blog_4.png'
import blog_5 from '../../Assets/images/blog_5.png'
import blog_6 from '../../Assets/images/blog_6.png'
import blog_7 from '../../Assets/images/blog_7.png'
import blog_8 from '../../Assets/images/blog_8.png'
import blog_9 from '../../Assets/images/blog_9.png'
import { Link } from 'react-router-dom'

const Blog = () => {
    const [dataDisplay, setDataDisplay] = useState([]);
    const [blogData, setBlogData] = useState([blog_1, blog_2, blog_3, blog_4, blog_5, blog_6, blog_7, blog_8, blog_9,
        blog_1, blog_2, blog_3, blog_4, blog_5, blog_6, blog_7, blog_8, blog_9]);

    const [number, setNumber] = useState(0);
    const [countPage, setCountPage] = useState(blogData.length / 6);
    const handeSetNumber = (select) => {
        setNumber(select);
    }

    const pageSize = 6;
    const dataCurrent = number * pageSize;
    useEffect(() => {
        setDataDisplay(blogData.slice(dataCurrent, dataCurrent + pageSize))
    }, [number, dataCurrent, blogData])

    return (
        <>
            <Header />
            <div className="container">
                <div className="breadCrumb">
                    <p className="breadCrumb__item">
                        Home &gt;
                    </p>
                    <p className="breadCrumb__item active">
                        Blog
                    </p>
                </div>
                <div className="wrapBlog">
                    <p className="blog__title">Blog</p>
                    <ControlBar countPage={countPage} handeSetNumber={handeSetNumber} number={number} />
                    <div className="row blog__list">
                        {dataDisplay.map((item, index) => (
                            <div key={index} className="col-12 col-md-4 col-lg-4 blog__item">
                                <img className="blog__item--image" src={item} alt="" />
                                <p className="blog__item--title">REVIEW SON KEM BOURJOIS VELVET</p>
                                <div className="blog__item--description">
                                    <p className="description__content">
                                        Hi, ch??o c??c n??ng ... sau kh?? nhi???u l???i h???a h??o th?? h??m nay t??? quay l???i h??m n??ng c??i Blog n??y v??o m???t ng??y ?????u h?? n??ng oi b???c, khi m?? d??n t??nh x?? nhau ??i t???m Free ????? gi???i nhi???t.
                                    </p>
                                    <p className="description__auth">
                                        B???i NamTran (27 / 05 / 2015)
                                    </p>
                                </div>
                                <div className="wrapReadMore">
                                    <p><Link to="/blog">Xem th??m &nbsp;<i className="fa fa-angle-right"></i></Link></p>
                                    <p>23 b??nh lu???n</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ControlBar countPage={countPage} handeSetNumber={handeSetNumber} number={number} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog
