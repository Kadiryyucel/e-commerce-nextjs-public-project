
'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';


import Site from '@/template/Site'


import { register } from 'swiper/element/bundle';
import { FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import types from 'swiper/types';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

import { Rating } from '@mui/material';

import Magnifying from '@/components/Magnifying';
import Slider from '../../../components/Slider'


import { CiHeart } from 'react-icons/ci'
import { PiCoatHanger } from "react-icons/pi";
import { FaTruckFast } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";

import nike from '../../../assets/nature-1.jpeg'

import useWhenResize from '@/customHooks/useWhenResize'


import { GetProductQuery } from "../../../../generated/graphql";
import { GET_PRODUCT } from "../../../../graphql/queries";

import { useSuspenseQuery } from '@apollo/client';
import { useAppDispatch } from '@/storiesRedux/store';
import { addProductFavorite, removeProductFavorite, addProductBasket, removeProductBasket } from '@/storiesRedux/reducers';

import basket from '@/repo/basket';
import favorites from '@/repo/favorites';


register();

export default function PrdouctDetail({ params }: { params: { id: string } }) {

  const id = decodeURIComponent(params.id);

  const product = useSuspenseQuery<GetProductQuery>(GET_PRODUCT, { variables: { ids: id } })
  const dataProduct = product.data?.products?.edges[0]?.node


  const swiperElRef = useRef(null);

  const [isClient, setIsClient] = useState<boolean>(false);
  const [isPagination, setPagination] = useState<boolean>(false);



  let currentWidth = useWhenResize()

  useEffect(() => {
    setIsClient(true);
    if (currentWidth <= 1280) {
      setPagination(true)
    }
    else {
      setPagination(false)
    }

  }, [currentWidth])



  let dispatch = useAppDispatch()

  const { add, del } = favorites(typeof window !== 'undefined' ? 'client' : 'server');
  const { add: basketAdd, del: basketDel } = basket(typeof window !== 'undefined' ? 'client' : 'server');
  const [isFavorite, setFavorite] = useState<boolean>(false);


  function toggleFavorite() {
    if (isFavorite) {
      del(id)
      setFavorite(false)
      dispatch(removeProductFavorite(id))
    }
    else {
      add(dataProduct)
      setFavorite(true)
      dispatch(addProductFavorite(dataProduct))
    }
  }


  const [isBasket, setBasket] = useState<boolean>(false);
  function toggleBasket() {
    if (isBasket) {
      basketDel(id)
      setBasket(false)
      dispatch(removeProductBasket(id))
    }
    else {
      basketAdd(dataProduct)
      setBasket(true)
      dispatch(addProductBasket(dataProduct))
    }
  }

  useEffect(() => {
    const getBasket = localStorage.getItem('basket');
    if (getBasket) {
      let isInBasket = JSON.parse(getBasket).some((fav: any) => fav.id === id);
      setBasket(isInBasket)
      setIsClient(true);
    }

  }, [id]);

  useEffect(() => {
    const getFavorites = localStorage.getItem('favorites');
    if (getFavorites) {
      let isInFavorites = JSON.parse(getFavorites).some((fav: any) => fav.id === id);
      setFavorite(isInFavorites)
      setIsClient(true);
    }
  }, [id]);


  const [data, setDeata] = useState([
    { id: 0, image: nike, title: 'hi' },
    { id: 1, image: nike, title: 'hi' },
    { id: 2, image: nike, title: 'hi' }
  ])


  const [thumbsSwiper, setThumbsSwiper] = useState<types.Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const [selectedColor, setColor] = useState<number>();
  const [selectedSize, setSize] = useState<number>();

  return (
    <>
      <Site>
        <div className='flex flex-col xl:flex-row xl:justify-center products'>
          <div className='w-full xl:w-[25rem] shirink-0'>
            <div className='relative w-full h-[126vw] h- md:h-[117vw] xl:h-[37.5rem]'>
              <Swiper
                onActiveIndexChange={(s: types.Swiper) => {
                  setActiveIndex(s.activeIndex)
                }}
                ref={swiperElRef}
                spaceBetween={10}
                navigation={true}
                pagination={isPagination}
                loop={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Pagination, Thumbs]}
                className='h-full focus-product'
              >

                {data.map(({ id, image, title }) => (
                  <SwiperSlide key={id}>
                    {activeIndex === id && <Magnifying>
                      <Image alt={dataProduct?.thumbnail?.alt || ''} width={400} height={400} className='w-5/6 md:w-11/12 xl:w-full xl:h-full' src={dataProduct?.thumbnail?.url || nike} />
                    </Magnifying>}
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="wrapper-img h-full w-[30rem] absolute top-0 left-full ml-4 z-20 overflow-hidden">
                <div className='absolute top-0 left-0 z-20 magnifying-img' style={{ width: '1000px', height: '1500px' }}>
                  <div className='absolute bg-stone-50 magnifying-img-content'></div>
                </div>
              </div>
            </div>
            <div className='w-full mt-4 hidden xl:block'>
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
                    <Image alt={dataProduct?.thumbnail?.alt || ''} width={400} height={400} className='h-full' src={dataProduct?.thumbnail?.url || nike} loading="lazy" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image alt={dataProduct?.thumbnail?.alt || ''} width={400} height={400} className='h-full' src={dataProduct?.thumbnail?.url || nike} loading="lazy" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image alt={dataProduct?.thumbnail?.alt || ''} width={400} height={400} className='h-full' src={dataProduct?.thumbnail?.url || nike} loading="lazy" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className='xl:w-[38rem] mx-4'>
            <div>
              <h2>{dataProduct?.name}</h2>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between items-center text-xs'>
                <div className='flex items-center'>
                  <span className='text-xs md:text-base'>3.8</span>
                  <div>
                    <Rating name="half-rating-read" className='!text-xs lg:!text-lg' defaultValue={dataProduct?.rating || 3.5} precision={0.5} readOnly />
                  </div>
                  <div className='bg-gray-400 rounded-full h-1 w-1 mx-2'></div>
                  <div className='text-slate-400 text-[0.65rem] lg:text-sm'>
                    <span className='text-[0.65rem] lg:text-sm pr-1 text-black'>7459</span>
                    Değerlendirme
                  </div>
                  <div className='flex items-center'>
                    <div className='bg-gray-400 rounded-full h-1 w-1 mx-2 hidden sm:block'></div>
                    <div className='text-slate-400 md: hidden sm:block'><span className='text-black'>1038</span> Soru & Cevap</div>
                    <div className='bg-gray-400 rounded-full h-1 w-1 mx-2 hidden sm:block'></div>
                    <div className='text-slate-400 hidden sm:block'><span className='text-black'>44045</span> Favori</div>
                  </div>
                </div>
                <div className='flex items-center text-slate-400 block sm:hidden'><LuHeart /><span className='text-black pl-1'>4.5B</span></div>
              </div>
              <div className='text-2xl font-base hidden sm:block my-4'>{dataProduct?.pricing?.priceRange?.start?.gross?.amount}</div>
            </div>
            <div className='w-full h-1 bg-gray-400 hidden sm:block'></div>
            <div>
              <h5 className='mt-4 mb-2'>Renk</h5>
              <div className='flex gap-x-2'>
                <div className={`bg-red-500 rounded-full h-8 w-8 hover:outline-double cursor-pointer ${selectedColor === 1 ? 'outline-double' : ''}`} onClick={() => setColor(1)}></div>
                <div className={`bg-orange-500 rounded-full h-8 w-8 hover:outline-double cursor-pointer ${selectedColor === 2 ? 'outline-double' : ''}`} onClick={() => setColor(2)}></div>
                <div className={`bg-amber-200 rounded-full h-8 w-8 hover:outline-double cursor-pointer ${selectedColor === 3 ? 'outline-double' : ''}`} onClick={() => setColor(3)}></div>
              </div>
            </div>
            <div>
              <h5 className='mt-4 mb-2'>Beden</h5>
              <div className='flex gap-2'>
                <div className={`flex items-center border-2 hover:outline-1 hover:border-zinc-900 hover:outline cursor-pointer rounded-lg h-8 px-4 leading-loose text-xs md:text-xl ${selectedSize === 1 ? 'outline' : ''}`} onClick={() => setSize(1)}>S</div>
                <div className={`flex items-center border-2 hover:outline-1 hover:border-zinc-900 hover:outline cursor-pointer rounded-lg h-8 px-4 leading-loose text-xs md:text-xl ${selectedSize === 2 ? 'outline' : ''}`} onClick={() => setSize(2)}>M</div>
                <div className={`flex items-center border-2 hover:outline-1 hover:border-zinc-900 hover:outline cursor-pointer rounded-lg h-8 px-4 leading-loose text-xs md:text-xl ${selectedSize === 3 ? 'outline' : ''}`} onClick={() => setSize(3)}>L</div>
                <div className={`flex items-center border-2 hover:outline-1 hover:border-zinc-900 hover:outline cursor-pointer rounded-lg h-8 px-4 leading-loose text-xs md:text-xl ${selectedSize === 4 ? 'outline' : ''}`} onClick={() => setSize(4)}>XL</div>
                <div className={`flex items-center border-2 hover:outline-1 hover:border-zinc-900 hover:outline cursor-pointer rounded-lg h-8 px-4 leading-loose text-xs md:text-xl ${selectedSize === 5 ? 'outline' : ''}`} onClick={() => setSize(5)}>XXL</div>
              </div>
            </div>
            <div className='flex jutify-center items-center mt-4'>
              <div className='text-amber-500 pr-1'>
                <PiCoatHanger color='inherit' size={28} />
              </div>
              <div className='text-xs md:text-xl'>Kullancıların çoğu 1 beden büyük almanızı öneriyor.</div>
            </div>

            <div className='flex items-center mt-4'>
              <div className={`flex justify-center items-center text-lg w-full h-12 text-white cursor-pointer ${isBasket ? 'bg-lime-600' : 'bg-amber-400'}`} onClick={() => toggleBasket()}>
                {isBasket ? 'Sepete Eklendi' : 'Sepete Ekle'}
                {isBasket && <div className='pl-2'><FaCheck size={28} /></div>}
              </div>

              <div className="flex top-4 right-4 w-12 h-12 ml-4 bg-slate-50 justify-center items-center rounded-full z-10 shrink-0 border hover:text-amber-500 cursor-pointer" onClick={() => toggleFavorite()}>
                {isClient && isFavorite ? <IoMdHeart color='rgb(245 158 11)' size={28} /> : <CiHeart color='inherit' size={28} />}
              </div>
            </div>
            <div>
              <div className='text-xs md:text-xl my-4'>
                Bu ürün en az 2 adet satın alınabilmektedir. Sepete eklendiğinde 2 adet olarak eklenecektir.
              </div>
            </div>
            <div className='flex justify-start items-center bg-emerald-50 px-4 py-2'>
              <div className='text-emerald-500 mr-2'>
                <FaTruckFast color='inherit' size={28} />
              </div>
              <div className='text-xs md:text-xl'>19 saat 24 dakika içinde sipariş verirsen en geç yarın kargoda!</div>
            </div>
            <div>
              <h3>Öne Çıkan Özellikler</h3>
              <ul className='info-about-product text-xs md:text-xl'>
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
        <div className='products mb-8'>
          <h2 className='ml-4'>Benzer ürünler</h2>
          <Slider></Slider>
        </div>
      </Site>
    </>
  );
}