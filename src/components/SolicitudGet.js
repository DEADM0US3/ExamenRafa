import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar'


function SolicitudGet() {
    const [data, setData] = useState([]);
    const [ver, setVer] = useState(false);
    const [id, setId] = useState(false);

    useEffect(() => {
        const apiKey = 'sk-ovF165328a58bc0482583';

        async function fetchData() {
            try {
                const response = await axios.get(`https://perenual.com/api/species-list?key=${apiKey}`);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const visualizar = (Dd) => {
        setVer(true)
        setId(Dd)
    }

    return (
        <>

            {
                ver ?
                    <div style={{ position: 'fixed', zIndex: 99, width: 100 + '%', height: 100 + 'vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content rounded-4 shadow">
                                    <div class="modal-header border-bottom-0">
                                        <h1 class="modal-title fs-5">{data[id].common_name}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={() => setVer(false)} aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body py-0">
                                        <p>Nombre cientifico: {data[id].scientific_name}</p>
                                        <p>Que tan seguido se tiene que regar: {data[id].watering}</p>
                                        
                                        <p>Que tanta luz necesita: {data[id].sunlight}</p>
                                    </div>
                                    <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                                        <button type="button" onClick={() => setVer(false)} class="btn btn-lg btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    ''
            }

            <Navbar />

            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">GREENMEX</h1>
                    </div>
                </div>
            </section>

            <div className="container mt-4">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {data.map((res, key) => (
                        <div className="col-md-4 mb-4" key={key}>
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#0000" />
                                    {res.default_image && <image href={res.default_image.original_url} width="100%" height="100%" />}
                                </svg>
                                <div className="card-body">
                                    <p className="card-text">{res.common_name}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" onClick={() => visualizar(key)} className="btn btn-sm btn-outline-secondary">View</button>
                                        </div>
                                        <small className="text-muted">{res.cycle}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SolicitudGet;
