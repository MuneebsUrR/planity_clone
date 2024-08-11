import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import bg from '../assets/images/img2.jpg'
import Header from '../components/Home/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Home/Footer';
function SignUp () {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="bg-gray-100">
      <Header isnothome={true} needAnimation={false} />
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 p-6 md:p-16 xl:p-36 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Nouveau sur Planity ?</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="phone" className="block mb-1">Téléphone portable *</label>
              <PhoneInput
                country={'fr'}
                value={phone}
                onChange={setPhone}
                inputProps={{
                  name: 'phone',
                  required: true,
                  className: 'w-full px-3 py-2 border rounded'
                }}
                containerClass="w-full"
                buttonClass="px-3 py-2 border rounded-l"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email *</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded" placeholder="Email" required />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block mb-1">Mot de passe *</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded pr-10"
                placeholder="Mot de passe"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-2 mt-6"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cgu" className="mr-2" required />
              <label htmlFor="cgu" className="text-sm">J'accepte les <a href="#" className="text-blue-600 hover:underline">CGU</a> de Planity.</label>
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-900">Créer mon compte</button>
          </form>
       
          <div className="mt-6 text-center">
            <p className="text-sm">ou</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4 text-center">Vous avez déjà utilisé Planity ?</h3>
            <Link to='/login'>
            <button className="w-full border border-black py-2 rounded hover:bg-black hover:text-white">Se connecter</button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <img src={bg} alt="Decorative beauty product" className="object-cover w-full h-full" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;