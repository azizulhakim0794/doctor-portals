import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson,
        id:'03'
    },
    {
        quote : 'Lorem ips um dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema,
        id:'02'
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non arch itecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza,
        id:'01'
    }
]

const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 className="text-main text-uppercase">Testimonial</h5>
                   <h1>What Our Patients Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;