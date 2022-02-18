/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [mengajar, setMengajar] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/products/${id}`, {
      title: title,
      img: img,
      price: price,
      mengajar: mengajar

    });
    history.push("/product");
  }

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.title);
    setImg(response.data.img);
    setPrice(response.data.price);
    setMengajar(response.data.mengajar);
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={updateProduct}>
          <div className='columns'>
            <div className='column'>
              <div className="field">
                <label className="label">Images</label>
                <input
                  className="input"
                  required
                  type="text"
                  placeholder="Salin Link Gambar"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
            </div>
            <div className='column'>
              <div className="field">
                <label className="label">Nama</label>
                <input
                  className="input"
                  required
                  type="text"
                  placeholder="Nama"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className='column'>
              <div className="field">
                <label className="label">Alamat</label>
                <input
                  className="input"
                  required
                  type="text"
                  placeholder="Alamat"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className='column'>
              <div className="field">
                <label className="label">Mengajar</label>
                <input
                  className="input"
                  required
                  type="text"
                  placeholder="Mengajar"
                  value={mengajar}
                  onChange={(e) => setMengajar(e.target.value)}
                />
              </div>
            </div>

          </div>
          <div style={{}}>
            <button className="button is-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProduct