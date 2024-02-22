import React, { useEffect, useState } from 'react';

function CardBusmek() {
    const [Busmek, setBusmek] = useState([]);
    const [filterIlce, setFilterIlce] = useState('');
    const [filterMahalle, setFilterMahalle] = useState('');

    useEffect(() => {
        const fetchBusmek = async () => {
            try {
                const response = await fetch('src/data/busmek_kurs_merkezleri.geojson');
                const dataBusmek = await response.json();
                console.log(dataBusmek);

                setBusmek(dataBusmek.features);
            } catch (error) {
                console.error('Veri alınırken bir hata oluştu:', error);
            }
        };

        fetchBusmek();
    }, []);

    
    const filteredBusmek = Busmek.filter(center => {
        const ilce = center.properties.ILCE.toLowerCase();
        const mahalle = center.properties.MAHALLE.toLowerCase();
        const filteredIlce = filterIlce.toLowerCase();
        const filteredMahalle = filterMahalle.toLowerCase();

       if (filterIlce && ilce.indexOf(filteredIlce) === -1) {
            return false;
        }
        if (filterMahalle && mahalle.indexOf(filteredMahalle) === -1) {
            return false;
        }
        return true;
    });

    return (
        <>
            <h2  className="text-danger">BUSMEK Kursları</h2>
            {/* Filtreleme formu */}
            <form>
                <div className="mb-3">
                    <label htmlFor="ilce" className="form-label text-danger">İlçe:</label>
                    <input type="text" className="form-control" id="ilce" value={filterIlce} onChange={(e) => setFilterIlce(e.target.value)} />
                    <small className="text-muted">İlçe bilgisini girerken sadece büyük harf kullanınız.</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="mahalle" className="form-label text-danger">Mahalle:</label>
                    <input type="text" className="form-control" id="mahalle" value={filterMahalle} onChange={(e) => setFilterMahalle(e.target.value)} />
                    <small className="text-muted">Mahalle bilgisini girerken sadece büyük harf kullanınız.</small>
                </div>
            </form>

            <div className="card">
                {filteredBusmek.map(center => (
                    <div key={center.properties.OBJECTID}>
                        <div className='card-header border border-danger-subtle border-3'><h3 className="text-danger">{center.properties.ADI}</h3> </div>
                        <div className="card-body">
                            <p><strong>İlçe:</strong> {center.properties.ILCE}</p>
                            <p><strong>Mahalle:</strong> {center.properties.MAHALLE}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CardBusmek;
