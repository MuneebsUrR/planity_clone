import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className="bg-custom-dark py-10">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          <div className="text-white flex flex-col items-center">
            <svg className="mb-6" width="140px" viewBox="0 0 140 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.8421 0.631592H0V15.3684H2.94737V12.4211H8.8421C12.0973 12.4211 14.7368 9.78153 14.7368 6.52633C14.7368 3.27112 12.0973 0.631592 8.8421 0.631592ZM8.8421 9.4737H2.94737V3.57896H8.8421C10.4697 3.57896 11.7895 4.89873 11.7895 6.52633C11.7895 8.15393 10.4697 9.4737 8.8421 9.4737ZM50.1053 0.631592L42.7368 15.3684H45.6842L47.1579 12.4211H56L57.4737 15.3684H60.421L53.0526 0.631592H50.1053ZM23.5789 0.631592H26.5263V12.4211H35.3684V15.3684H23.5789V0.631592ZM94.3158 0.631592H91.3684V15.3684H94.3158V0.631592ZM103.158 3.57896V0.631592H117.895V3.57896H112V15.3684H109.053V3.57896H103.158ZM137.053 0.631592L132.632 7.26317L128.211 0.631592H125.263L131.158 9.4737V15.3684H134.105V9.4737L140 0.631592H137.053ZM48.6316 9.4737L51.5789 3.57896L54.5263 9.4737H48.6316ZM70.7369 0.631592L79.579 10.9474V0.631592H82.5263V15.3684H79.579L70.7369 5.05264V15.3684H67.7895V0.631592H70.7369Z" fill="currentColor"></path>
            </svg>
            <div className="flex gap-4">
              <FacebookIcon fontSize='large' />
              <InstagramIcon fontSize='large' />
            </div>
          </div>
          <div className="text-white">
            <Typography variant="h6" className="font-semibold mb-5">À propos de Planity</Typography>
            <div className="text-custom-gray font-semibold text-lg space-y-2">
              {['Link Here', 'Link Here', 'Link Here', 'Link Here'].map((link, index) => (
                <Link key={index} href="#" className="block">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-white">
            <Typography variant="h6" className="font-semibold mb-5">Trouvez votre prestation</Typography>
            <div className="text-custom-gray font-semibold text-lg space-y-2">
              {['Link Here', 'Link Here', 'Link Here', 'Link Here'].map((link, index) => (
                <Link key={index} href="#" className="block">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-white">
            <Typography variant="h6" className="font-semibold mb-5">Recherches fréquentes</Typography>
            <div className="text-custom-gray font-semibold text-lg space-y-2">
              {['Link Here', 'Link Here', 'Link Here', 'Link Here'].map((link, index) => (
                <Link key={index} href="#" className="block">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-10 border border-custom-gray" />
        <p className="text-center text-custom-gray font-bold">Copyright © {new Date().getFullYear()} Planity</p>
      </Container>
    </div>
  );
}

export default Footer;
