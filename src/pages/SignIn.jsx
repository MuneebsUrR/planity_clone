import React from 'react';
import bg from '../assets/images/img2.jpg'
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import { Link } from 'react-router-dom';
function SignIn() {
    return (
        <div div className='bg-gray-100'>
        <Header isnothome={true} needAnimation={false} />
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full md:w-1/2 p-6 md:p-16 xl:p-36 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-6 text-center">Vous avez déjà utilisé Planity ?</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1">Email *</label>
                        <input type="email" id="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">Mot de passe *</label>
                        <input type="password" id="password" name="password" placeholder="Mot de passe" className="w-full px-3 py-2 border rounded" required />
                    </div>
                    <div>
                        <Link to={'/forgot-password'} className="text-sm text-black underline">Mot de passe oublié ?</Link>
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-900">Se connecter</button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm">ou</p>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4 text-center">Nouveau sur Planity ?</h3>
                    <Link to='/register'>
                    <button  className="w-full border border-black py-2 rounded hover:bg-black hover:text-white">Créer mon compte</button>
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

export default SignIn;