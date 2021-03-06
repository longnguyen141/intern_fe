import React from 'react'
import iconFacebook from '../../Assets/images/facebook.svg'
import iconTwitter from '../../Assets/images/twitter.svg'
import iconInstagram from '../../Assets/images/instagram.svg'
import iconGoogle from '../../Assets/images/google.svg'
import iconPinterest from '../../Assets/images/pinterest.svg'
import iconLinkedin from '../../Assets/images/linkedin.svg'
import Slider from 'react-slick'
import SpaceLine from '../../Common/spaceLine'
import logo from '../../Assets/images/logo.png'
import blog_2 from '../../Assets/images/blog_2.png'
import { Link } from 'react-router-dom'


const AdditionalInfo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            }
        ]
    };
    return (
        <div className="addtional__infomation">
            <div className="container">
                <div className="slider__contact">
                    <Slider {...settings}>
                        <div className="contact__item">
                            <img src={iconFacebook} alt="" />
                            <p className="txt">Facebook</p>
                        </div>
                        <div className="contact__item">
                            <img src={iconTwitter} alt="" />
                            <p className="txt">Twitter</p>
                        </div>
                        <div className="contact__item">
                            <img src={iconInstagram} alt="" />
                            <p className="txt">Instagram</p>
                        </div>
                        <div className="contact__item">
                            <img src={iconGoogle} alt="" />
                            <p className="txt">Google</p>
                        </div>
                        <div className="contact__item">
                            <img src={iconPinterest} alt="" />
                            <p className="txt">Pinterest</p>
                        </div>
                        <div className="contact__item">
                            <img src={iconLinkedin} alt="" />
                            <p className="txt">Linkedin</p>
                        </div>
                    </Slider>
                </div>
                <div className="row ">
                    <div className="col-md-6 col-lg-4">
                        <div className="about__item">
                            <p className="about__item--title">V??? v???i ch??ng t??i</p>
                            <SpaceLine />
                            <div className="about__item--content">
                                <img src={logo} alt="" />
                                <h3>GI???I THI???U CHUNG V??? M??? PH???M HANDMADE MANDALA</h3>
                                <p>Hi, ch??o c??c n??ng ... sau kh?? nhi???u l???i h???a h??o th?? h??m nay t??? quay l???i h??m n??ng c??i Blog n??y v??o m???t ng??y ?????u h?? n??ng oi b???c, khi m?? d??n t??nh x?? nhau ??i t???m Free ????? gi???i nhi???t.Hi, ch??o c??c n??ng ... sau kh?? nhi???u l???i h???a h??o th?? h??m nay t??? quay l???i h??m n??ng c??i Blog n??y v??o m???t ng??y ?????u h?? n??ng oi b???c, khi m?? d??n t??nh x?? nhau ??i t???m Free ????? gi???i nhi???t.Hi, ch??o c??c n??ng ... sau kh?? nhi???u l???i h???a h??o th?? h??m nay t??? quay l???i h??m n??ng c??i Blog n??y v??o m???t ng??y ?????u h?? n??ng oi b???c, khi m?? d??n t??nh x?? nhau ??i t???m Free ????? gi???i nhi???t.</p>

                                <Link to="/" className="seeMore">Xem th??m</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="about__item">
                            <p className="about__item--title">Blog</p>
                            <SpaceLine />
                            <div className="about__item--content blog">
                                <div className="wrapImg">
                                    <img className="img-fluid img__blog" src={blog_2} alt="" />
                                </div>
                                <h3>REVIEW SON KEM BOURJOIS VELVET</h3>
                                <div className="wrapContent">
                                    <p className="wrapContent__main">Hi, ch??o c??c n??ng ... sau kh?? nhi???u l???i h???a h??o th?? h??m nay t??? quay l???i h??m n??ng c??i Blog n??y v??o m???t ng??y ?????u h?? n??ng oi b???c, khi m?? d??n t??nh x?? nhau ??i t???m Free ????? gi???i nhi???t.</p>
                                    <Link to="/" className="wrapContent__info">B???i NamTran (27/05/2015)</Link>
                                </div>
                                <div className="wrapDetail">
                                    <Link to="/" className="seeMore">
                                        Xem th??m <i className="fas fas-angle-down"></i>
                                    </Link>
                                    <Link to="/" className="commentCount">
                                        23 b??nh lu???n
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="about__item">
                                    <p className="about__item--title">G???I EMAIL CHO CH??NG T??I</p>
                                    <SpaceLine />
                                    <div className="wrapContact__form">
                                        <input className="inputEmail" type="text" placeholder="Email c???a b???n" />
                                        <p className="description">G???i email ????? nh???n nh???ng ??u ????i m???i nh???t</p>
                                        <button className="buttonSend">G???i</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-12">
                                <div className="about__item">
                                    <p className="about__item--title">TAG S???N PH???M</p>
                                    <SpaceLine />
                                    <ul className="listTags">
                                        <li><Link to="/">?????ng h???</Link></li>
                                        <li><Link to="/">T??i</Link></li>
                                        <li><Link to="/">Ph??? ki???n</Link></li>
                                        <li><Link to="/">Gi??y</Link></li>
                                        <li><Link to="/">??o s?? mi</Link></li>
                                        <li><Link to="/">Sandal</Link></li>
                                        <li><Link to="/">N?????c hoa</Link></li>
                                        <li><Link to="/">Tr??? em</Link></li>
                                        <li><Link to="/">Sandal</Link></li>
                                        <li><Link to="/">N?????c hoa</Link></li>
                                        <li><Link to="/">Tr??? em</Link></li>
                                        <li><Link to="/">N?????c hoa</Link></li>
                                        <li><Link to="/">Tr??? em</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInfo
