import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import CardHome from "../Component/CardHome";
import SmallCard from "../Component/SmallCard";
// import { store } from "../Pages/Details";
import {store} from "./Datails";

const Home = () => {
    const [detail] = useContext(store);
    return (
        <div>
            <div className="Home">
                <div className="home__container">
                    <div className="home__first">
                        <Link to="/Technology">
                            {" "}
                            <img
                                src={"https://www.rackspace.com/sites/default/files/2022-06/APPLICATION-600x400.png"}
                                alt="not found"
                            />
                        </Link>
                    </div>
                    <div className="home_right_container">
                        <div className="home__sec">
                            <Link to="/fitness">
                                {" "}
                                <img
                                    src={"https://www.scrolldroll.com/wp-content/uploads/2019/08/Fitness-Quotes.jpg"}
                                    alt="not found"
                                />
                            </Link>
                        </div>

                        <div className="home__thir">
                            <Link to="/Food">
                                {" "}
                                <img
                                    src={"https://media.gettyimages.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=gi&k=20&c=f-hk_ABcJZiEDNxUfAq-Tqxg0kdE01MbMWkBXhBobl0="}
                                    alt="not found"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <h1 style={{ marginTop: "40px" }}>The Latest</h1>
                <hr style={{ width: "200px", thickness: "20px" }} />
                <div className="home__left left1">
                    {detail
                        .filter((article) => {
                            return article.category === "bollywood";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>
                <div className="home__left left1">
                    {detail
                        .filter((article) => {
                            return article.category === "technology";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>
                <div className="home__left left1">
                    {detail
                        .filter((article) => {
                            return article.category === "food";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>
                    Latest Articles
                </h1>

                <h1 className="Top">Top Posts</h1>
                <hr style={{ width: "200px", thickness: "20px" }} />

                <div className="rightbar2">
                    {detail
                        .filter((article) => {
                            return article.category === "mix";
                        })
                        .map((n) => (
                            <Card
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>
                <div className="sidebar2">
                    {detail
                        .filter((article) => {
                            return article.category === "mix";
                        })
                        .map((n) => (
                            <SmallCard
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))}

                    <div className="advertisement">
                        <p>Advertisement</p>
                    </div>
                </div>
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>
                    Latest Stories
                </h1>
                <hr />

                <div className="home__left">
                    {detail
                        .filter((article) => {
                            return article.category === "footer1";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>

                <div className="home__left">
                    {detail
                        .filter((article) => {
                            return article.category === "footer2";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>

                <div className="home__left">
                    {detail
                        .filter((article) => {
                            return article.category === "footer3";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;