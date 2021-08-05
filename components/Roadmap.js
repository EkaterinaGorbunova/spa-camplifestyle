import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';

const steps = [
  {
    name: 'Create account',
    description: 'Vitae sed mi luctus laoreet',
    href: '#',
    status: 'complete',
  },
  {
    name: '10% sold',
    description: 'Cursus semper viverra facilisis et et some more',
    href: '#',
    status: 'current',
  },
  {
    name: '30% sold',
    description: 'Penatibus eu quis ante',
    href: '#',
    status: 'upcoming',
  },
  {
    name: '50% sold',
    description: 'Anuran store opens!',
    href: '#',
    status: 'upcoming',
  },
  {
    name: '80% sold',
    description: 'The liquidity pool will open',
    href: '#',
    status: 'upcoming',
  },
  {
    name: '90% sold',
    description: 'Iusto et officia maiores porro ad non quas',
    href: '#',
    status: 'upcoming',
  },
  {
    name: '100% sold',
    description: 'The Project gets unlocked',
    href: '#',
    status: 'upcoming',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Roadmap = () => {
  return (
    <div id='roadmap'>
      <div className='py-14 px-4 mx-auto max-w-7xl sm:px-8 lg:py-24 lg:px-8'>
        <div className='space-y-8 sm:space-y-12'>
          <div className='space-y-5 sm:mx-auto sm:space-y-4 sm:max-w-xl lg:max-w-5xl'>
            <h2 className='text-2xl font-extrabold text-center text-gray-100 uppercase md:text-4xl font-inter'>
              Roadmap
            </h2>
          </div>
          <div
            aria-label='Progress'
            className='flex flex-wrap justify-center items-center px-4 h-full'
          >
            <ol className='overflow-hidden'>
              {steps.map((step, stepIdx) => (
                <li
                  key={step.name}
                  className={classNames(
                    stepIdx !== steps.length - 1 ? 'pb-10' : '',
                    'relative'
                  )}
                >
                  {step.status === 'complete' ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className='absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-indigo-600'
                          aria-hidden='true'
                        />
                      ) : null}
                      <a
                        href={step.href}
                        className='flex relative items-start group'
                      >
                        <span className='flex items-center h-9'>
                          <span className='flex relative z-10 justify-center items-center w-8 h-8 bg-indigo-600 rounded-full group-hover:bg-indigo-800'>
                            <CheckIcon
                              className='w-5 h-5 text-white'
                              aria-hidden='true'
                            />
                          </span>
                        </span>
                        <span className='flex flex-col ml-4 min-w-0'>
                          <span className='m-1 font-semibold tracking-wide text-indigo-500 uppercase md:text-lg text-md'>
                            {step.name}
                          </span>
                          <span className='m-1 text-lg text-gray-400'>
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  ) : step.status === 'current' ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className='absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-gray-300'
                          aria-hidden='true'
                        />
                      ) : null}
                      <a
                        href={step.href}
                        className='flex relative items-start group'
                        aria-current='step'
                      >
                        <span
                          className='flex items-center h-9'
                          aria-hidden='true'
                        >
                          <span className='flex relative z-10 justify-center items-center w-8 h-8 bg-white rounded-full border-2 border-indigo-600'>
                            <span className='w-2.5 h-2.5 bg-indigo-600 rounded-full duration-500 animate-pulse' />
                          </span>
                        </span>
                        <span className='flex flex-col ml-4 min-w-0'>
                          <span className='m-1 font-semibold tracking-wide text-indigo-500 uppercase md:text-lg text-md'>
                            {step.name}
                          </span>
                          <span className='m-1 text-lg text-gray-300'>
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className='absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-gray-300'
                          aria-hidden='true'
                        />
                      ) : null}
                      <a
                        href={step.href}
                        className='flex relative items-start group'
                      >
                        <span
                          className='flex items-center h-9'
                          aria-hidden='true'
                        >
                          <span className='flex relative z-10 justify-center items-center w-8 h-8 bg-white rounded-full border-2 border-gray-300 group-hover:border-gray-400'>
                            <span className='w-2.5 h-2.5 bg-transparent rounded-full group-hover:bg-gray-300' />
                          </span>
                        </span>
                        <span className='flex flex-col ml-4 min-w-0'>
                          <span className='m-1 font-semibold tracking-wide text-gray-500 uppercase md:text-lg text-md'>
                            {step.name}
                          </span>
                          <span className='m-1 text-lg text-gray-400'>
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
