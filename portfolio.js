document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-content li").forEach((li) => {
      li.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const projectList = [
      {
        title : '프로젝트',
        date : '2024.07.01 - 2024.07.15(4人 팀 프로젝트)',
        content : '여행에 필요한 항공',
        content_list : [1,2,3,4],
        skill : 'java, spring boot, mysql'
      },
      {
        title : '프로젝트',
        date : '2024.07.01 - 2024.07.15(4人 팀 프로젝트)',
        content : '여행에 필요한 항공',
        content_list : [1,2,3,4],
        skill : 'java, spring boot, mysql'
      }
    ]
  });