import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ListPage() {
    const data = useLoaderData(); // data = { postResponse: Promise }

    return (
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    <Suspense fallback={<p>Loading posts...</p>}>
                        <Await
                            resolve={data.postResponse}
                            errorElement={<p>Error loading posts!</p>}
                        >
                            {(postResponse) =>
                                postResponse?.data?.length > 0 ? (
                                    postResponse.data.map((post) => (
                                        <Card key={post.id} item={post} />
                                    ))
                                ) : (
                                    <p>No posts found.</p>
                                )
                            }
                        </Await>
                    </Suspense>
                </div>
            </div>

            <div className="mapContainer">
                <Suspense fallback={<p>Loading map...</p>}>
                    <Await
                        resolve={data.postResponse}
                        errorElement={<p>Error loading map data!</p>}
                    >
                        {(postResponse) => (
                            <Map items={postResponse?.data ?? []} />
                        )}
                    </Await>
                </Suspense>
            </div>
        </div>
    );
}

export default ListPage;
