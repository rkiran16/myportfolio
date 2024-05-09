import React from 'react';
import workData from './data';
import Skills from '../components/Skills';

const Work = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 py-4">
      {workData &&
        workData.map((work, index) => {
          const { id, title, image, url, stack, projectDescription } =
            work;
          return (
            <>
              <div
                key={`${id}${index}`}
                className="col"
                style={{ minHeight: '400px' }}
              >
                <div className="card h-100 neo-btn position-relative rounded-4">
                  <div className="card-header p-4 d-flex justify-content-between">
                    <p className="h4">{title}</p>
                    <a
                      href={url}
                      target="_blank"
                      className="btn neo-btn neo-btn-primary"
                      rel="noreferrer"
                    >
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                  <div
                    class="card-body p-5 overflow-hidden"
                    style={{ maxHeight: '450px' }}
                  >
                    <img
                      src={image}
                      className="object-fit-contain w-100 h-100"
                      alt={title}
                    ></img>
                  </div>
                  <div className="card-footer">
                    <p>{projectDescription}</p>
                    <Skills skills={stack} />
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Work;
