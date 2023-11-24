
'use client'
import { useEffect, useRef, useState } from 'react';

import Magnifying from '@/components/Magnifying';

import { register } from 'swiper/element/bundle';
import { FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import types from 'swiper/types';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import nike from '../../assets/nike.png'
import { Button, Rating } from '@mui/material';

import { CiHeart } from 'react-icons/ci'
import { AiTwotoneHeart } from 'react-icons/ai'
import { PiCoatHanger } from "react-icons/pi";
import { FaTruckFast } from "react-icons/fa6";

register();

export default function PrdouctDetail() {


  const swiperElRef = useRef(null);

  const [isClient, setIsClient] = useState<boolean>(false);
  const [isFavorite, setFavorite] = useState<boolean>(false);


  useEffect(() => {
    /*swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });*/

    const getFavorites = JSON.parse(localStorage.getItem('favorites') || '');
    setFavorite(true)
    setIsClient(true);

    setIsClient(true);

  }, []);

  const [data, setDeata] = useState([
    { id: 0, image: nike, title: 'hi' },
    { id: 1, image: nike, title: 'hi' },
    { id: 2, image: nike, title: 'hi' }
  ])


  const [thumbsSwiper, setThumbsSwiper] = useState<types.Swiper | null>(null);
  const [activeIndex,setActiveIndex] = useState<number>(0)

  return (
    <>
      <div className='flex flex-col xl:flex-row'>
        <div className='w-full xl:w-[25rem] shirink-0'>
          <div className='relative w-full h-[37.5rem]'>
            <Swiper
              onActiveIndexChange={(s:types.Swiper)=>{
                setActiveIndex(s.activeIndex)
                console.log(s.activeIndex)
              }}
              ref={swiperElRef}
              spaceBetween={10}
              navigation={true}
              loop={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Pagination, Thumbs]}
              className='h-full focus-product'
            >

              {data.map(({ id, image, title }) => (
                <SwiperSlide key={id}>
                  {activeIndex === id && <Magnifying>
                    <img className='w-5/6 xl:h-full' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  </Magnifying>}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="wrapper-img h-full w-[30rem] absolute top-0 left-full ml-4 z-20 overflow-hidden">
              <div className='absolute top-0 left-0 z-20 magnifying-img' style={{width:'1000px',height:'1500px'}}>
                <div className='absolute magnifying-img-content'></div>
              </div>
            </div>
          </div>
          <div className='w-full mt-4'>
            <div>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='detail-thumbs'>
                <SwiperSlide>
                  <img className='h-full' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='h-full' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='h-full' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className='w-7/12 mx-4'>
          <div>
            <h3>Baytas Baytaş Ekek Likrarlı Boxer 1444</h3>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center text-xs'>
              <span className='text-base'>3.8</span>
              <div>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
              </div>
              <div className='bg-gray-400 rounded-full h-1 w-1 mx-2'></div>
              <div className='text-slate-400'><span className='text-black'>7459</span> Değerlendirme</div>
              <div className='bg-gray-400 rounded-full h-1 w-1 mx-2'></div>
              <div className='text-slate-400'><span className='text-black'>1038</span> Soru & Cevap</div>
              <div className='bg-gray-400 rounded-full h-1 w-1 mx-2'></div>
              <div className='text-slate-400'><span className='text-black'>44045</span> Favori</div>
            </div>
            <div className='text-2xl font-base'>14,99 TL</div>
          </div>
          <div className='w-full h-1 bg-gray-400'></div>
          <div>
            <h5>Renk</h5>
            <div className='flex gap-x-2 '>
              <div className='bg-gray-400 rounded-full h-8 w-8'></div>
              <div className='bg-gray-400 rounded-full h-8 w-8'></div>
              <div className='bg-gray-400 rounded-full h-8 w-8'></div>
            </div>
          </div>
          <div>
            <h5>Beden</h5>
            <div className='flex gap-2'>
              <div className='border-2 rounded-lg h-8 px-4 leading-loose'>S</div>
              <div className='border-2 rounded-lg h-8 px-4 leading-loose'>M</div>
              <div className='border-2 rounded-lg h-8 px-4 leading-loose'>L</div>
              <div className='border-2 rounded-lg h-8 px-4 leading-loose'>XL</div>
              <div className='border-2 rounded-lg h-8 px-4 leading-loose'>XXL</div>
            </div>
          </div>
          <div className='flex jutify-center items-center mt-4'>
            <div className='text-amber-500'>
              <PiCoatHanger color='inherit' size={28} />
            </div>
            <div>Kullancıların çoğu 1 beden büyük almanızı öneriyor.</div>
          </div>
          <div className='flex items-center mt-4'>
            <Button variant='contained' className='w-full h-12'>Onayla</Button>
            <div className="flex top-4 right-4 w-12 h-12 ml-4 bg-slate-50 justify-center items-center rounded-full z-10 shrink-0 border hover:text-amber-500 cursor-pointer" onClick={() => toggleFavorite()}>
              {isClient && isFavorite ? <AiTwotoneHeart color='rgb(245 158 11)' size={28} /> : <CiHeart color='inherit' size={28} />}
            </div>
          </div>
          <div>
            <div>Bu ürün en az 2 adte satın alınabilmektedir.Sepete eklendiğinde 2 adet olarak eklenecektir.</div>
          </div>
          <div className='flex justify-start items-center bg-emerald-50 px-4 py-2'>
            <div className='text-emerald-500 mr-2'>
              <FaTruckFast color='inherit' size={28} />
            </div>
            <div>19 saat 24 dakika içinde sipariş verirsen en geç yarın kargoda!</div>
          </div>
          <div>
            <h3>Öne Çıkan Özellikler</h3>
            <ul className='info-about-product'>
              <li>Bu ürün Yaman Tekstil trafından gönderilecektir.</li>
              <li>Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.</li>
              <li>İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.</li>
              <li>Bu ürünü satın aldıktan sonra iptal etmek istemeniz durumunda ilgili üründen satın alınan adedin hepsi iptal edilecektir.</li>
              <li>Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır.</li>
              <li>Bu üründen en fazla 10 adet sipariş verilebilir. 10 adedin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar. Belirlenen bu limit kurumsal siparişlerde geçerli olmayıp, kurumsal siparişler için farklı limitler belirlenebilmektedir.</li>
              <li>15 gün içinde ücretsiz iade. Detaylı bilgi için tıklayın.</li>
              <li>Baytaş Yıldız Erkek Boxer DİKKAT Tüm müşterilerimiz için hijyen koşullarının çok önemli olduğunu biliyoruz. Bu sebeple, her türlü korse mayo, sütyen, sütyen takımı, termal içlik,çorap, boxer, külot, string, slip, atlet ve fanila modelleri ve benzeri alt ve üst grup hijyenik ürünler ile fantazi iç giyim kategorisindeki hiç bir ürünün iadesi veya değişimi yoktur. Denenmiş veya denenmemiş olmasına bakılmaksızın bu tarz ürünlerin iadesi veya değişimi yapılamadığından renk ve beden seçimine dikkat edilmesi oldukça önemlidir.</li>
            </ul>
          </div>
          <div className='flex w-full pt-4 mt-4 mb-20 justify-center items-center'>
            <div className='flex absolute w-72 h-10 bg-gray-200 rounded-full justify-center items-center'>
              <div>ÜRÜNÜN TÜM ÖZELLİKLERi</div>
            </div>
            <span className='w-full border-t-2'></span>
          </div>
        </div>
      </div>
    </>
  );
}