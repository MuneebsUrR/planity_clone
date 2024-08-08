import React from 'react'

export default function Press() {
    const brandImages = [
        { id: 1, name: 'Vogue', src: 'https://picsum.photos/200' },
        { id: 2, name: 'Grazia', src: 'https://picsum.photos/200' },
        { id: 3, name: 'Elle', src: 'https://picsum.photos/200' },
        { id: 4, name: 'Marie Claire', src: 'https://picsum.photos/200' },
    ];

    return (
        <div className="bg-black py-20 mt-24 text-center">
            <p className='text-gray-400 font-semibold underline' style={{ textDecorationColor: '#625DF5', textDecorationThickness: '2px', textUnderlineOffset: '10px' }}>Presse</p>
            <h2 className="text-white text-4xl font-semibold mb-10 mt-6">Ils parlent de nous</h2>
            <div className='flex items-center justify-center'>
             <div className='rounded-l-lg border border-gray-800 p-16'><svg  height="28" viewBox="0 0 70 18" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M20.403.078c4.078-.03 7.546 4.406 7.546 8.555 0 3.755-2.578 9.244-7.546 9.26-4.967.017-7.412-5.081-7.412-9.26 0-3.972 3.335-8.526 7.412-8.555zm0 .156c-3.412 0-4.27 4.253-4.27 8.399 0 6.618 1.048 9.075 4.27 9.08 3.223.006 4.334-2.996 4.334-9.08 0-4.612-.921-8.4-4.334-8.4zm8.893 8.51c-.019-4.518 3.581-8.521 6.628-8.72 1.1-.078 2.516.428 3.341.789.6.262 1.825-.117 2.042-.813h.119v6.156h-.119c0-.263-1.135-5.977-5.383-5.977-3.138 0-3.441 5.544-3.441 8.566 0 3.022.091 9.004 3.753 9.004 1.774 0 3.087-.78 3.428-2.358v-4.797h-1.49v-.204h5.772v.204h-1.423v7.013h-.116S42.175 16.595 41 16.6c-1.501.004-2.916 1.314-4.642 1.298-4.563-.042-7.045-4.633-7.063-9.152zM1.797.685H0V.483h6.295v.203h-1.58l4.5 12.274C10.62 8.608 11.71 5.39 13.176.685h-1.562V.482h3.323v.203h-1.513L7.958 17.81 1.798.685zm43.03 12.933L44.8.665h-1.71V.47h6.302v.194h-1.71l.038 14.201c.378 1.626 1.051 2.86 3.35 2.878 2.299.019 3.862-1.366 4.442-3.258V.665h-1.956V.477H69.57l.033 6.217h-.154C69.153 2.68 67.611 1.162 64.915.72c-.927-.152-1.9-.04-3.13-.05v7.936c1.07.083 2.212.015 2.98-.649.7-.603.898-1.998.95-2.564h.135v6.909h-.147c-.042 0-.098-1.734-.937-2.557-.844-.828-1.92-1.031-2.982-.834v8.477c1.5 0 2.697.127 3.736-.159 3.158-.87 4.27-3.547 4.26-6.231h.176v6.59H57.394v-.2h1.42V.665h-3.069v13.82c-.348 1.323-1.619 3.51-4.877 3.496-3.03-.014-6.034-1.386-6.04-4.364z" fill="#ffff" fill-rule="evenodd"></path></svg></div> 
             <div className='border border-gray-800 p-16'>
                <svg height="28" viewBox="0 0 57 18" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M5.942.134c-.027.142-.056.33-.12.476-.208.483-.697.397-.955.02C4.514.116 4.203 0 3.76 0 1.125 0 0 5.712 0 8.82c0 3.75.972 8.952 3.764 8.96.844.003 1.495-1.265 2.102-1.265.547 0 .565.734.687 1.09.001.002.095 0 .097 0V9.029h.845v-.215H4.129v.215h.834V14.5c0 1.713-.408 3.012-1.16 3.012-1.558 0-1.901-5.889-1.901-8.695 0-2.167.466-8.635 1.855-8.635 1.806 0 2.27 5.274 2.441 5.955l.083-.005L6.035.135S5.943.131 5.942.134zM43.808 17.29V.447 17.29h-.746v.208h3.18v-.208h-.746L45.491.447h.75V.242h-3.18v.205h.747V17.29zm-9.231-.001L38.789.243h-5.863V5.27l.168-.002s.013-.842.013-1.278c0-1.696.667-3.541 1.875-3.541h1.912l-4.098 17.05 6.036-.004v-5.026l-.177-.001c0 .49-.006.98-.006 1.448 0 2.455-1.145 3.335-2.08 3.373h-1.992zM14.34.45l.652-.003c.92 0 1.636 2.302 1.636 3.745 0 1.353-.22 3.168-.773 3.888-.596.774-1.169.735-1.515.737V.45zM11.92.244V.45h.735l.003 16.836h-.84v.211h3.273v-.211h-.75s-.003-8.254 0-8.254c.374-.003.48-.003.815.06.75.14.991 1.752 1.08 2.291.101.62.04 3.697.227 4.703.114.617.517 1.604 1.313 1.604.958 0 1.337-1.263 1.346-1.308l-.054-.04c-.058.099-.383.737-.826.329-.525-.484-.164-5.382-.688-6.447-.13-.263-.775-1.253-1.633-1.253-.174 0-.191-.116 0-.116 1.432 0 2.361-2.128 2.361-4.412 0-2.29-1.104-4.2-2.807-4.2H11.92zm12.043 12l1.237-6.749 1.15 6.75h-2.387zm-1.191 5.042l-.733.005v.205h1.872v-.207h-.868l.873-4.825h2.463l.842 4.821h-.677v.212h3.092v-.209l-.676-.002L25.99 0l-3.216 17.286zM51.3 12.244l1.236-6.749 1.15 6.75H51.3zm-1.191 5.042l-.734.005v.205h1.873v-.207h-.869l.874-4.825h2.463l.842 4.821h-.678v.212h3.093v-.209l-.676-.002L53.324 0 50.11 17.286z" fill="#ffff" fill-rule="evenodd"></path></svg></div>
               <div className='border border-gray-800 p-16'> <svg height="28" viewBox="0 0 45 18" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M1.371 17.691V.265H0V0h7.409v4.749h-.225s-.02-2.752-.921-3.648C5.485.346 4.85.265 3.52.265v8.336s.921.061 1.372-.387c.716-.693.777-1.59.777-2.833h.246v6.726h-.246c0-1.244-.082-2.14-.777-2.833-.45-.449-1.372-.388-1.372-.388v8.785c1.33 0 2.15-.061 2.927-.836.921-.897.921-3.648.921-3.648h.225v4.77H0v-.266h1.371zM16.21.265v17.426c1.33 0 2.149-.081 2.926-.835.9-.897.921-3.649.921-3.649h.225v4.77H12.69v-.265h1.372V.245h-1.372V0h4.769v.265H16.21zm12.198 0v17.426c1.33 0 2.149-.081 2.926-.835.901-.897.921-3.649.921-3.649h.226v4.77h-7.594v-.265h1.372V.245h-1.372V0h4.77v.265h-1.25zm10.356 17.426V.265h-1.371V0H44.8v4.749h-.225s-.02-2.752-.92-3.648c-.778-.755-1.413-.836-2.743-.836v8.336s.92.061 1.371-.387c.716-.693.778-1.59.778-2.833h.245v6.726h-.245c0-1.244-.082-2.14-.778-2.833-.45-.449-1.371-.388-1.371-.388v8.785c1.33 0 2.149-.061 2.927-.836.92-.897.92-3.648.92-3.648h.226v4.77h-7.593v-.266h1.37z" fill="#ffff" fill-rule="evenodd"></path></svg></div>
                <div className='rounded-r-lg border border-gray-800 p-16'>
                <svg width="100" height="28" viewBox="0 0 105 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1232 13.0475L22.2536 10.058L21.8886 8.44769C21.9425 8.43376 21.8986 8.32614 21.8966 8.31017C21.5874 5.75718 19.615 6.04416 18.3346 6.48262C18.3346 6.48262 18.2667 6.54639 18.2687 6.4627C18.2727 6.35906 18.2747 5.32468 18.2747 5.04567C18.2747 4.97992 18.3326 4.95997 18.3326 4.95997C19.9321 4.25846 22.2476 4.31825 23.6716 5.02973C24.7406 5.56584 25.3629 6.37701 25.9513 8.8124C26.1128 9.48605 26.2983 10.4128 26.8128 12.4257C27.0602 13.3923 27.3214 13.753 27.8539 13.6514C27.9198 13.6394 27.9217 13.6733 27.9217 13.7311C27.9198 14.1895 27.9198 14.9568 27.9198 15.0106C27.9198 15.17 27.9198 15.17 27.8659 15.168C27.7981 15.166 26.394 15.17 26.394 15.17C25.7538 15.166 24.974 15.166 23.9608 14.2811L23.1232 13.0475Z" fill="white"></path><path d="M23.1234 13.048C23.1473 13.1197 23.0436 13.1915 22.9758 13.2234C20.764 14.4809 19.9602 10.7561 22.1142 10.0386C22.202 10.0147 22.2538 10.0585 22.2538 10.0585L21.8888 8.44824C20.7381 8.70134 18.9291 9.22151 18.1453 9.96089C16.3922 11.615 17.1481 14.2796 19.0727 14.9692C20.1477 15.3538 22.3695 15.6587 23.961 14.2816L23.1234 13.048Z" fill="white"></path><path d="M38.1572 4.26258C39.3758 4.26258 40.3651 3.46542 40.3651 2.4809C40.3651 1.49641 39.3758 0.699219 38.1572 0.699219C36.9366 0.699219 35.9493 1.49641 35.9493 2.4809C35.9493 3.46542 36.9366 4.26258 38.1572 4.26258Z" fill="white"></path><path d="M48.0105 9.1079C48.0783 9.08999 48.3456 9.09595 48.3236 8.71929C48.2658 7.75868 48.0265 7.10298 47.7452 6.72032C47.2147 6.00087 46.2434 5.97496 45.7428 7.04121C45.4496 7.66301 45.3918 8.79501 45.4317 9.55034C45.4457 9.78554 45.4835 9.79749 45.6989 9.74567L45.8725 11.1667C45.7967 11.2065 45.703 11.1726 45.8126 11.4656C46.5047 13.3251 47.4979 13.5782 48.8262 13.5024C49.5143 13.4646 50.2841 13.1058 50.5554 12.9643C50.8246 12.8208 50.7827 12.9922 50.7827 13.0939V14.3514C50.7827 14.5547 50.8007 14.6265 50.4417 14.756C48.6268 15.4197 46.2434 15.5771 44.3926 14.6663C42.8369 13.901 41.4209 11.8822 41.5426 9.67989C41.736 6.17427 43.916 4.27894 47.1848 4.38456C49.7596 4.46828 51.7281 6.35561 51.9674 9.12983C51.9774 9.24542 51.9754 9.4228 51.8657 9.4846L48.0105 9.1079Z" fill="white"></path><path d="M48.0117 9.10791C47.5569 9.24547 45.7001 9.74588 45.7001 9.74588L45.8736 11.1673C45.9474 11.1255 51.8668 9.48473 51.8668 9.48473L48.0117 9.10791Z" fill="white"></path><path d="M16.1189 14.3577C16.1169 14.838 16.2286 15.0214 16.2664 15.1011C16.2984 15.1728 16.2027 15.1629 16.2027 15.1629H15.4568H12.3474C12.3474 15.1629 12.2716 15.1668 12.2956 15.1011C12.3414 14.9716 12.4352 14.7384 12.4352 14.3577L12.4312 13.8595V9.1242V8.23334C12.4292 7.89852 12.2218 7.17908 11.41 7.17707C10.7379 7.18306 10.1117 7.79291 10.1097 8.63792V10.4057L10.1077 13.9332C10.1077 13.9332 10.1097 14.3398 10.1097 14.3577C10.1077 14.838 10.2194 15.0214 10.2573 15.1011C10.2892 15.1728 10.1935 15.1629 10.1935 15.1629H9.44952H6.33823C6.33823 15.1629 6.26245 15.1668 6.28637 15.1011C6.33227 14.9716 6.42399 14.7384 6.426 14.3577V14.0926V9.13019V8.23933C6.42399 7.90251 6.21656 7.18504 5.40286 7.18106C4.73274 7.18705 4.10449 7.79689 4.10449 8.6419V9.09829V14.0727L4.10053 14.3577C4.10053 14.838 4.21222 15.0214 4.24807 15.1011C4.28002 15.1728 4.18629 15.1629 4.18629 15.1629H3.44033H0.331054C0.331054 15.1629 0.253268 15.1668 0.277188 15.1011C0.325089 14.9716 0.414804 14.7384 0.418821 14.3577V14.0229C0.418821 12.7853 0.416812 7.35047 0.414804 6.85023C0.418821 6.52338 0.315107 6.29022 0.265259 6.16265C0.235313 6.09691 0.301108 6.06701 0.301108 6.06701C0.301108 6.06701 1.7192 5.43126 4.04265 4.35903C4.06657 4.34908 4.1065 4.36301 4.10449 4.40489V5.33957V6.14273C4.10449 6.18659 4.15239 6.21049 4.18824 6.17263C4.2082 6.15271 4.23212 6.12081 4.26408 6.08495C5.53847 4.14379 9.50539 3.82892 10.1296 6.15271C10.1416 6.19255 10.1855 6.18856 10.2114 6.15271C10.9972 5.10043 11.785 4.57029 13.4045 4.57029C16.5716 4.57029 16.1149 7.26876 16.1129 8.93089L16.1149 13.8595L16.1189 14.3577Z" fill="white"></path><path d="M32.6271 14.3647C32.6251 14.843 32.7368 15.0283 32.7727 15.108C32.8066 15.1798 32.7109 15.1698 32.7109 15.1698H31.7675H28.6582C28.6582 15.1698 28.5804 15.1718 28.6043 15.108C28.6502 14.9765 28.7419 14.7453 28.7439 14.3647L28.7459 14.0777C28.7459 12.8441 28.7439 7.57669 28.7439 7.07645C28.7439 6.79744 28.5565 6.27727 28.5206 6.18361C28.4966 6.1338 28.5744 6.11385 28.5744 6.11385C28.5744 6.11385 30.2538 5.2569 32.5673 4.18668C32.5912 4.1767 32.6291 4.19066 32.6291 4.2325V5.27283C32.6291 5.41235 32.6431 5.8488 32.6431 5.90661C32.6431 5.95243 32.6909 5.97634 32.7248 5.93848C32.7448 5.91655 32.7707 5.88666 32.8006 5.8488C33.6642 4.15481 35.0364 4.2086 36.0795 4.36406C36.2131 4.38398 36.1951 4.42783 36.1593 4.6032C36.0915 4.93802 35.6307 6.83332 35.5909 6.97281C35.5589 7.09041 35.527 7.14223 35.3854 7.11233C34.0751 6.8373 32.6291 7.2638 32.6291 8.89603V9.13119C32.6291 10.321 32.6291 13.2307 32.6311 14.0797L32.6271 14.3647Z" fill="white"></path><path d="M40.223 14.3647C40.221 14.8431 40.3327 15.0284 40.3686 15.1081C40.4025 15.1799 40.3068 15.1699 40.3068 15.1699H39.3574H36.2481C36.2481 15.1699 36.1703 15.1739 36.1922 15.1081C36.2401 14.9766 36.3319 14.7454 36.3339 14.3647L36.3359 14.3089V6.22944C36.3359 6.03014 36.3359 6.02813 36.4775 5.96436C36.5513 5.93048 36.5254 5.94243 36.5254 5.94243C36.5254 5.94243 37.8656 5.28076 40.1014 4.22847C40.1253 4.21652 40.219 4.23245 40.217 4.27433C40.217 4.59318 40.221 13.4699 40.223 14.3269V14.3647Z" fill="white"></path><path d="M63.763 13.3298C62.8316 13.8042 61.4415 13.9576 60.6118 12.9033C59.7861 11.853 59.3792 10.9343 59.3812 9.42959C59.3832 6.00963 61.7586 5.5612 63.5615 6.56766V4.80985C62.5443 4.29367 61.2021 4.20398 60.193 4.30963C57.1873 4.63049 55.4323 7.14762 55.4303 10.0115C55.4283 13.1325 57.4227 16.8674 63.763 15.1315V13.3298Z" fill="white"></path><path d="M68.7449 13.9693C68.7449 13.9693 68.7309 0.40121 68.7369 0.470971C68.7369 0.470971 65.9347 1.76441 64.4689 2.46394C64.6145 2.58351 64.9216 3.10568 64.9216 4.82559V9.18021C64.9236 10.4258 64.9216 12.8134 64.9036 14.7027C64.9017 14.91 64.77 15.199 64.77 15.2189H69.0041C68.9623 15.2189 68.7449 13.9693 68.7449 13.9693Z" fill="white"></path><path d="M75.9072 13.1583C75.9312 13.234 75.8912 13.2579 75.8214 13.2938C75.3388 13.6007 74.5111 13.6685 74.0245 13.2161C73.5658 12.674 73.3264 12.0542 73.5199 11.2789C73.6734 10.8026 74.1621 9.97155 74.9778 9.82606L74.7165 8.26758C74.7186 8.29549 74.7165 8.29349 74.6348 8.31143C74.3874 8.37322 74.2559 8.39713 73.827 8.46886C72.9236 8.61833 71.9024 8.92526 71.0528 9.58692C68.6296 11.4683 69.7664 14.2365 71.7349 15.0496C72.8837 15.5239 74.912 15.801 76.5873 14.4039L75.9072 13.1583Z" fill="white"></path><path d="M75.9068 13.1584L75.0073 9.8401C75.0073 9.8401 75.0073 9.8162 74.9774 9.82614L74.7161 8.26764C74.5366 5.48346 72.2989 5.74058 71.0564 6.20492C71.0564 6.20492 70.9866 6.27069 70.9905 6.18299C70.9925 6.0754 70.9965 5.00119 70.9965 4.7122C70.9945 4.64244 71.0544 4.62449 71.0544 4.62449C72.6359 3.93096 75.0532 4.02462 76.4493 4.72415C77.6739 5.336 78.2821 6.46003 78.5275 7.42662C78.5275 7.42662 79.6264 12.4369 79.75 12.979C79.8498 13.4135 80.133 13.7922 80.5757 13.7901C80.7513 13.7901 80.7752 13.8241 80.7772 14.0054C80.7792 14.4438 80.7811 15.1195 80.7792 15.2131C80.7772 15.3267 80.7692 15.3686 80.6835 15.3686C80.6136 15.3686 79.1637 15.3706 79.1637 15.3706C78.3839 15.3666 77.7417 15.3646 76.5869 14.404L75.9068 13.1584Z" fill="white"></path><path d="M83.7214 4.12417C84.9858 4.12417 86.011 3.29711 86.011 2.27472C86.011 1.25434 84.9858 0.427246 83.7214 0.427246C82.455 0.427246 81.4298 1.25434 81.4298 2.27472C81.4298 3.29711 82.455 4.12417 83.7214 4.12417Z" fill="white"></path><path d="M85.7142 14.3648V14.5821C85.7142 14.897 85.8558 15.1341 85.8897 15.2178C85.8917 15.2278 85.8797 15.2338 85.8797 15.2338H84.8008H81.498C81.498 15.2338 81.4841 15.2278 81.488 15.2178C81.518 15.1401 81.6615 14.893 81.6615 14.5821V14.3469C81.6615 13.0614 81.6635 6.74775 81.6635 5.96252C81.6635 5.76921 81.7533 5.76124 81.7533 5.76124C81.7533 5.76124 83.2351 5.00391 85.6484 3.88983C85.6723 3.87788 85.7142 3.89184 85.7122 3.93569C85.7122 4.2685 85.7142 13.476 85.7142 14.3648Z" fill="white"></path><path d="M94.3262 7.0325C93.3728 7.01857 93.1335 6.95878 92.6309 7.13614C92.0047 7.37531 91.5739 7.87355 91.5619 8.63287V9.09325V14.3706V14.5819C91.5619 14.8888 91.6995 15.12 91.7314 15.2017C91.7354 15.2097 91.7234 15.2156 91.7234 15.2156H90.6764H87.4654C87.4654 15.2156 87.4534 15.2097 87.4554 15.1997C87.4853 15.126 87.6249 14.8848 87.6249 14.5819V14.3547V6.82324C87.603 6.53827 87.4873 6.19348 87.4534 6.1038C87.4295 6.05395 87.5073 6.03601 87.5073 6.03601C87.5073 6.03601 89.1526 5.27472 91.4981 4.19452C91.52 4.18257 91.5619 4.19652 91.5599 4.24038V5.18303C91.5599 5.32256 91.5758 5.76697 91.5758 5.82676C91.5758 5.87061 91.6237 5.89451 91.6597 5.85665C91.6796 5.83473 91.7035 5.80483 91.7354 5.76697C92.6808 4.01716 94.2244 4.23837 95.0103 4.36193C95.1459 4.38187 95.1259 4.4257 95.0901 4.60308C95.0202 4.94188 94.5755 6.7495 94.5356 6.891C94.5017 7.0106 94.4718 7.03651 94.3262 7.0325Z" fill="white"></path><path d="M100.791 9.34238C100.857 9.32246 101.124 9.32845 101.102 8.95176C101.044 7.99117 100.805 7.33747 100.524 6.95482C99.9933 6.23338 99.022 6.20747 98.5215 7.27571C98.2302 7.8955 98.1724 9.02949 98.2123 9.78284C98.2243 10.018 98.2641 10.0299 98.4776 9.98014L98.651 11.3991C98.5773 11.441 98.4815 11.4071 98.5912 11.7001C99.2833 13.5595 100.279 13.8106 101.605 13.7368C102.293 13.699 103.063 13.3383 103.334 13.1968C103.605 13.0533 103.563 13.2267 103.563 13.3283V14.5859C103.563 14.7871 103.579 14.8589 103.222 14.9904C101.405 15.6521 99.022 15.8095 97.1732 14.8987C95.6175 14.1355 94.2015 12.1146 94.3212 9.91436C94.5147 6.40678 96.6965 4.51147 99.9634 4.61909C102.54 4.70281 104.507 6.58814 104.746 9.36233C104.756 9.47792 104.756 9.6553 104.646 9.71706L100.791 9.34238Z" fill="white"></path><path d="M100.793 9.34326C100.338 9.47885 98.479 9.98126 98.479 9.98126L98.6525 11.4008C98.7263 11.3609 104.648 9.71808 104.648 9.71808L100.793 9.34326Z" fill="white"></path></svg>
                </div>
            </div>
        </div>
    );
}
