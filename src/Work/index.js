import React from 'react';
import ProjectCard from '../components/ProjectCard';
import workData from './data';

const Work = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 py-4">
      {workData &&
        workData.map((work, index) => {
          const { id, title, image } = work;
          return (
            <>
              <div
                key={`${id}${index}`}
                className="col"
                style={{ minHeight: '400px' }}
                data-bs-toggle="modal"
                data-bs-target={`#${id}Modal`}
              >
                <div className="card h-100 neo-btn position-relative rounded-4">
                  <div className="p-4 d-flex justify-content-between">
                    <p className="h4">{title}</p>
                    <button className="btn neo-btn neo-btn-primary">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                  </div>
                  <div class="overflow-hidden p-5 h-100 position-relative ">
                    <img
                      src={image}
                      className="img-fluid shadow"
                      alt={title}
                    ></img>
                  </div>
                </div>
              </div>
              <ProjectCard work={work} />
            </>
          );
        })}
    </div>
  );
};

export default Work;
