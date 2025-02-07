import React from 'react';

const NewsletterSection = ({
  title = "Subscribe Our Newsletter",
  description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam explicabo sit est eos earum reprehenderit inventore nam autem corrupti rerum!",
  disclaimer = "No ads, No trials, No commitments",
  stats = [
    { count: "500+", label: "Successfully Trained", subText: "Learners & counting" },
    { count: "100+", label: "Certification Students", subText: "Online Course" },
  ]
}) => {
  return (
  
    <div className="newsletter bg-blue-700 text-white text-center py-10 ">
      <div className="newsletter-content">
      <div className="btn-update">
        <button className="update text-[9.84px] font-bold uppercase tracking-wide px-[15px] py-[8px] rounded-2xl bg-[#04040437]">GET LATEST HISTUDY UPDATE</button>
      </div>
        <h2 className="newsletter-heading text-[32.23px] font-bold mb-4">{title}</h2>
        <div class="flex justify-center items-center">
              <p class="description w-1/2 text-center text-[13.39px]">{description}</p>
        </div>
        <p className="disclaimer text-[10.5px] mb-10 text-gray-300">{disclaimer}</p>
        <div className="stats flex justify-center gap-12 mt-8 flex-wrap">
          <div className="stat text-center max-w-xs">
            <h3 className="count text-[35.45px] font-bold">{stats[0].count}</h3>
            <p className="stat-text text-[14.53px] mt-3 font-semibold">{stats[0].label}</p>
            <p className="sub-text  text-[12px] mt-1">{stats[0].subText}</p>
          </div>
          
          {/* Vertical line separator between the stats */}
          <div className="line-cen-news bg-gray-500 opacity-50 w-px h-32 mx-10 hidden sm:block"></div>

          <div className="stat text-center max-w-xs">
            <h3 className="count text-[35.45px] font-bold">{stats[1].count}</h3>
            <p className="stat-text text-[14.53px] mt-3 font-semibold">{stats[1].label}</p>
            <p className="sub-text text-[12px] mt-1">{stats[1].subText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
