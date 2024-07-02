function Footer() {
  return (
    <footer>
      <div className='bg-[#1d204f] flex align-top gap-8 px-[10rem] py-8'>
        <div className='flex-[14rem]'>
          <img src='\src\assets\sn-logo_vitaminD3.webp' className='w-60' />
          <p className='text-white text-xs'>
            These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
        <div className='flex-[6rem] text-white'>
          <p className=' text-[#b3dd19] font-extrabold text-xs'>QUICK LINKS:</p>
          <ul>
            <li>Dr.&apos;s Secret</li>
            <li>Whats in</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className='flex-[14rem] text-white'>
          <p className=' text-[#b3dd19] font-extrabold text-xs'>CONTACT US:</p>
          <p>
            Smarter Nutrition, Inc. 17870 Newhope St Ste 104 #480 Fountain
            Valley, CA 92708
          </p>
        </div>
        <div className='flex-[10rem] text-white'>
          <p className=' text-[#b3dd19] font-extrabold text-xs'>
            ANY QUESTIONS?
          </p>
          <div>
            <p>Contact us:</p>
            <p>1-877-892-1380</p>
          </div>
        </div>
      </div>
      <div className='bg-[#070936] text-[#64668b] text-xs flex items-center justify-between px-[10rem] py-2'>
        <p>
          &copy; Smarter Nutrition (Smarter Joint Food). All Rights Reserved.
        </p>
        <div className='flex gap-6'>
          <p>Privacy Policy</p>
          <p>Terms And Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
