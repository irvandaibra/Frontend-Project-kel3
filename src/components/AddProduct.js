import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [mengajar, setMengajar] = useState('');
  const history = useHistory();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/products', {
      title: title,
      img: img,
      price: price,
      mengajar: mengajar
    });
    history.push("/Product");
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={saveProduct}>
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

export default AddProduct