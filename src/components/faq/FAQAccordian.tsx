"use client";

import { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';

const poppinsBold = Poppins({ weight: '700', subsets: ['latin'] });
const poppinsRegular = Poppins({ weight: '400', subsets: ['latin'] });

interface FAQItem {
  faq_id: number;
  question: string;
    answer: string;
    is_rich_text?: boolean; // Assuming this is a boolean field to filter FAQs
}

const FAQAccordian = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const response = await fetch('/faq/api');
        
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }

          const data = await response.json();
        
        if (data.code === 200) {
          // Filter FAQs with faq_id <= 11 as in your original code
          setFaqs(data.data.filter((val: FAQItem) => val.is_rich_text == false));
        } else {
          throw new Error(data.message || 'Failed to fetch FAQs');
        }
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-8">
      <div>
        <h3 className={`${poppinsBold.className} text-center md:text-lg text-md text-black`}>Got Questions?</h3>
        <div className="w-[80%] lg:w-[70%] mx-auto text-center mt-2 mb-4">
          <p className={`${poppinsRegular.className} text-center md:text-sm text-sm text-black`}>
            Join thousands of Indian parents building stronger bonds and brighter futures with our expert-backed parenting tools.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <span className="ml-3">Loading FAQs...</span>
        </div>
      ) : error ? (
        <div className="text-center py-8 text-red-500">
          Error: {error}
        </div>
      ) : (
        <div className="w-full max-w-3xl mx-auto">
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <div
                key={faq.faq_id}
                className="mb-3 border-b border-gray-200 last:border-b-0"
              >
                <button
                  className={`w-full flex justify-between items-center py-4 px-4 text-left ${poppinsBold.className} text-sm md:text-base`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 transform transition-transform duration-200">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${poppinsRegular.className} ${
                    activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-4 text-sm md:text-base text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No FAQs available at the moment.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQAccordian;


// "use client";

// import { useState, useEffect } from 'react';
// import { Poppins } from 'next/font/google';
// import DOMPurify from 'dompurify';

// const poppinsBold = Poppins({ weight: '700', subsets: ['latin'] });
// const poppinsRegular = Poppins({ weight: '400', subsets: ['latin'] });

// interface FAQItem {
//   faq_id: number;
//   question: string;
//   answer: string;
// }

// const FAQAccordian = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [faqs, setFaqs] = useState<FAQItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchFAQs = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('/faq/api');
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch FAQs');
//         }

//         const data = await response.json();
        
//         if (data.code === 200) {
//           setFaqs(data.data.filter((val: FAQItem) => val.faq_id <= 11));
//         } else {
//           throw new Error(data.message || 'Failed to fetch FAQs');
//         }
//       } catch (err) {
//         console.error('Error fetching FAQs:', err);
//         setError(err instanceof Error ? err.message : 'An unknown error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFAQs();
//   }, []);

//   const toggleAccordion = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="mt-8">
//       <div>
//         <h3 className={`${poppinsBold.className} text-center md:text-lg text-md text-black`}>Got Questions?</h3>
//         <div className="w-[80%] lg:w-[70%] mx-auto text-center mt-2 mb-4">
//           <p className={`${poppinsRegular.className} text-center md:text-sm text-sm text-black`}>
//             Join thousands of Indian parents building stronger bonds and brighter futures with our expert-backed parenting tools.
//           </p>
//         </div>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-8">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//           <span className="ml-3">Loading FAQs...</span>
//         </div>
//       ) : error ? (
//         <div className="text-center py-8 text-red-500">
//           Error: {error}
//         </div>
//       ) : (
//         <div className="w-full max-w-3xl mx-auto">
//           {faqs.length > 0 ? (
//             faqs.map((faq, index) => (
//               <div 
//                 key={faq.faq_id} 
//                 className="mb-3 border-b border-gray-200 last:border-b-0"
//               >
//                 <button
//                   className={`w-full flex justify-between items-center py-4 px-4 text-left ${poppinsBold.className} text-sm md:text-base`}
//                   onClick={() => toggleAccordion(index)}
//                 >
//                   <span>{faq.question}</span>
//                   <span className="ml-4 transform transition-transform duration-200">
//                     {activeIndex === index ? '−' : '+'}
//                   </span>
//                 </button>
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ease-in-out ${poppinsRegular.className} ${
//                     activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                  <div 
//   className="px-4 pb-4 text-sm md:text-base text-gray-600"
//   dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(faq.answer) }}
// />
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center py-8 text-gray-500">
//               No FAQs available at the moment.
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FAQAccordian;