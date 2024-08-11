import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/images/img2.jpg'

function ForgotPassword() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="w-full md:w-1/2 p-6 md:p-16 xl:p-40 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Mot de passe oublié ?</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-900"
          >
            Réinitialiser mon mot de passe
          </button>
        </form>
        <div className="mt-4">
          <Link to="/login" className="text-sm text-black underline">
            Retour à la connexion
          </Link>
        </div>
        <div className="mt-6 text-center">


          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500">OU</span>
          </div>

        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4 text-center">Nouveau sur Planity ?</h3>
          <Link to="/register">
            <button className="w-full border border-black py-2 rounded hover:bg-black hover:text-white">
              Créer mon compte
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:block w-1/2">
        <img
          src={bg}
          alt="Decorative beauty product"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;