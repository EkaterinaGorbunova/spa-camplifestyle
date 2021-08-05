import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';

const steps = [
  {
    name: 'Create account',
    description: 'Vitae sed mi luctus laoreet.',
    href: '#',
    status: 'complete',
  },
  {
    name: '10% sold:',
    description: 'Cursus semper viverra facilisis et et some more.',
    href: '#',
    status: 'complete',
  },
  {
    name: '30% sold:',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'current',
  },
  {
    name: '50% sold:',
    description: 'Anuran store opens!',
    href: '#',
    status: 'upcoming',
  },
  {
    name: '80% sold',
    description: 'The liquidity pool will open.',
    href: '#',
    status: 'upcoming',
  },
  {
    name: '90% sold:',
    description: 'Iusto et officia maiores porro ad non quas.',
    href: '#',
    status: 'upcoming',
  },
  {
    name: '100% sold:',
    description: 'The Project gets unlocked.',
    href: '#',
    status: 'upcoming',
  },
];

const styles = { orderLast: 'bg-green-500', orderFirst: 'bg-red-500' };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Roadmap = () => {
  return (
    <div id='roadmap'>
      <h2 className='text-4xl font-inter text-center font-extrabold text-gray-100 uppercase'>
        Roadmap
      </h2>
      <div
        aria-label='Progress'
        className='flex flex-wrap items-center justify-center h-full p-8'
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
                      className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600'
                      aria-hidden='true'
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className='relative flex items-start group'
                  >
                    <span className='h-9 flex items-center'>
                      <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800'>
                        <CheckIcon
                          className='w-5 h-5 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </span>
                    <span className='ml-4 min-w-0 flex flex-col bg-gray-200 rounded-md'>
                      <span className='m-2 text-sm font-semibold tracking-wide uppercase text-indigo-600'>
                        {step.name}
                      </span>
                      <span className='m-2 text-sm text-gray-500 font-inter leading-normal'>
                        {step.description}
                      </span>
                    </span>
                  </a>
                </>
              ) : step.status === 'current' ? (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300'
                      aria-hidden='true'
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className='relative flex items-start group'
                    aria-current='step'
                  >
                    <span className='h-9 flex items-center' aria-hidden='true'>
                      <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full'>
                        <span className='h-2.5 w-2.5 bg-indigo-600 rounded-full animate-pulse duration-500' />
                      </span>
                    </span>

                    <span className='ml-4 min-w-0 flex flex-col bg-white rounded-md'>
                      <span className='m-2 text-sm font-semibold tracking-wide uppercase text-indigo-600'>
                        {step.name}
                      </span>
                      <span className='m-2 text-sm text-gray-600'>
                        {step.description}
                      </span>
                    </span>
                  </a>
                </>
              ) : (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300'
                      aria-hidden='true'
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className='relative flex items-start group'
                  >
                    <span className='h-9 flex items-center' aria-hidden='true'>
                      <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400'>
                        <span className='h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300' />
                      </span>
                    </span>
                    <span className='ml-4 min-w-0 flex flex-col bg-gray-300 rounded-md'>
                      <span className='m-2 text-sm font-semibold tracking-wide uppercase text-gray-500'>
                        {step.name}
                      </span>
                      <span className='m-2 text-sm text-gray-500'>
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
  );
};
