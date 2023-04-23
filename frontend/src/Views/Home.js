import {useState} from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../Styling/Home.css'

function Home() {

    const [courseCategories, setCourseCategories] = useState(["python", "Javascript", "webdevelopment", "mobile development"]);
    const data = [
        {
          id: 1,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 2,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 3,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 4,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 5,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 6,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 7,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 8,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 9,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 10,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 11,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 12,
          courseName: "Hello world",
          creator: "Philip Hilding",
          price: "12.99",
          rating: "4",
          numsOfRating: 500,
          img: 'https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
      ];

      
      const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 930;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 930;
      };


    return (
        <div>
            <section className="upper-home-section">
                <div className="upper-home-section-div">
                    
                </div>
            </section>
            <section className='middle-home-section'>
                <div className='middle-home-section-div'>
                    <h2>Popular courses right now</h2>
                    <div className=''>
                        {
                            courseCategories.map((categories) => {
                                return(
                                    <button className='home-page-category-button'>{categories}</button>
                                )
                            })
                        }
                    </div>
                    <div className='popular-courses-parent-div relative flex items-center'>
                        <ChevronLeftIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                        <div
                            id='slider'
                            className='popular-courses-child-div w-full h-full scroll whitespace-nowrap'
                        >
                            {data.map((item) => (
                                <div className='course-div'>
                                    <img
                                        className='w-[220px] course-image p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                                        src={item.img}
                                        alt='/'
                                    />
                                    <h3>{item.courseName}</h3>
                                    <h5>{item.creator}</h5>
                                    <p>{item.rating} ({item.numsOfRating})</p>
                                    <p>{item.price}</p>
                                </div>
                            ))}
                        </div>
                        <ChevronRightIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
                    </div>
                </div>
            </section>
            <section className="lower-home-section">
                <div className="lower-home-section-div">
                    <h2>Need some help to find the right course?</h2>
                    <button>Get help with finding a course</button>
                </div>
            </section>
        </div>
    )
}

export default Home;