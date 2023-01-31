import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import Slider from '@mui/material/Slider';
import AutocompleteGenres from './AutocompleteGenres';
import * as React from 'react';
import {Link} from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import buildFiltersURL from '../utils/StringUtils';



export default function Filters() {

  const [valueGenre, setValueGenre] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let minRating = 0
  let maxRating = 5
  let from = 1800
  let to = 2023

  if (!(searchParams.get("min_rating") === null || searchParams.get("max_rating") === null)) {
    minRating = searchParams.get("min_rating")
    maxRating = searchParams.get("max_rating")
    
  }

  if (!(searchParams.get("from") === null || searchParams.get("to") === null)) {
    from = searchParams.get("from")
    to = searchParams.get("to")
    
  }


  const [valueRating, setValueRating] = React.useState([minRating, maxRating])
  const [valueDate, setValueDate] = React.useState([from, to]) 
  

  const handleChangeGenre = (genres) => {
    setValueGenre(genres);
  
  }

  const handleChangeRating = (event, newValue) => {
    
    setValueRating(newValue);
  };

  const handleChangeDate = (event, newValue) => {
    
    setValueDate(newValue);
  };
  

  React.useEffect(() => {
    console.log(valueGenre);
  },[valueGenre]);


  return (
    <div className="w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-slate-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Filters</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-slate-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 mt-3 w-60 max-w-sm -translate-x-[80%] transform px-4 sm:px-0 lg:max-w-3xl mr-80">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">                 
                    
                    <div
                          className=" text-black -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 pb-[3.2rem]"
                    >
                      <div className="ml-2 xl:ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            Genre
                          </p>
                          <p className="text-sm text-gray-500">
                            Filter genres.
                          </p>
                          
                          <AutocompleteGenres handleChangeGenre={handleChangeGenre}/>
                          
                          
                      </div>
                    </div>

                    <div
                        
                        className=" text-black -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="ml-2 xl:ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            Release date
                          </p>
                          <p className="text-sm text-gray-500">
                            Movie relase date
                          </p>
                          <Slider
                            getAriaLabel={() => 'Release date'}
                            value={valueDate}
                  
                            onChange={handleChangeDate}
                            valueLabelDisplay="auto"
                            min={1800}
                            max={2023}
                            
                            color="secondary"
                          />
                      </div>
                    </div>
                    
                    <div
                        
                        className=" text-black -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="ml-2 xl:ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          Rating
                        </p>
                        <p className="text-sm text-gray-500">
                          Rating min & max
                        </p>
                        <Slider
                          getAriaLabel={() => 'Rating'}
                          value={valueRating}
                          marks={true}
                          onChange={handleChangeRating}
                          valueLabelDisplay="auto"
                          min={0}
                          max={5}
                          color="secondary"
                        />
                      </div>
                      
                    </div>
                    <div
                        className=" text-black -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className='ml-2 xl:ml-4'>
                          
                          <Link to={buildFiltersURL(valueRating[0], valueRating[1], valueDate[0], valueDate[1])}>
                            <button className='xl:px-14  px-12 md:px-14  sm:px-14 font-semibold transition ease-in-out delay-150 bg-gradient-to-r from-pink-200 to-fuchsia-300  hover:bg-gradient-to-r hover:to-blue-300 hover:from-sky-200 duration-300  opacity-80 my-6 mx-auto py-3 mt-8 w-full rounded-md text-black drop-shadow-2xl'>Submit</button>
                          </Link>
                        </div>
                      </div>
                  </div>
                  
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

