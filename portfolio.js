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

    // 프로젝트 부분 동적 데이터 추가
    const projectList = [
      {
        title : '제휴 도매업체 상품 연동',
        date : '2023.06 - 2023.07(1人 프로젝트)',
        content : '20만개의 도매사이트 상품 데이터 수집 및 판매상태 동기화',
        content_list : [
            '제휴사 API 호출 및 JSON 데이터를 파싱하여 정보 저장 기능 개발',
            '수집된 데이터를 스케줄러(cron)로 주기적 업데이트',
            '온라인 몰 주문 시 판매된 상품 정보를 제휴사로 발주 기능 개발',
            '사용자에게 20만 개 이상의 최신 상품 정보 제공으로 구매 가능 상품군 확대',
            '제휴사 API 문서를 분석하고 REST API 연동 방식을 학습하여 실무에 직접 적용함으로써 API 기반 서비스 개발 역량 강화'
        ],
        skill : 'PHP(CodeIgniter), MySQL, HTML, CSS, JavaScript, Rest API',
        isBest : true,
        links : [
            { git : '' },
            { photo: '' },
            { link : '' },
            { figma : '' },
        ]
      },
      {
        title : 'TRAVEL(여행플랫폼)',
        date : '2024.07.01 - 2024.07.15(4人 팀프로젝트)',
        content : 'SpringBootFramework를 이용한 여행 예약 사이트',
        content_list : [
            '나만의 여행 일정을 손쉽게 관리하기 위해 개발',
            '회원가입/로그인/로그아웃/마이페이지 기능 개발',
            '사이트에 상품을 등록하는 기업의 관리자 페이지 구현',
            '최고 관리자 페이지에서 회원, 기업, 상품, 결제 정보를 관리'
        ],
        skill : 'JAVA, Spring boot, Mybatis, Thymelef, Git, MySQL, dbeaver',
        isBest : false,
        links : [
            { git : 'https://github.com/leeuihyoun/traveler/tree/jueun' },
            { photo: '' },
            { link : '' },
            { figma : 'https://www.figma.com/design/9SQn2br6QKvs3VQyEQbMu9/TeamProject?node-id=0-1&t=EaXKI99q8VAkfRYW-1' },
        ]
      },
      {
        title : '빽다방 웹사이트',
        date : '2025.02(1人 개인 프로젝트)',
        content : 'Next.js를 이용한 첫 프론트엔드 개발',
        content_list : [
            'Next.js를 이용하여 기존에 있던 빽다방 웹사이트 개발',
        ],
        skill : 'React, Next.js, JavaScript, Tailwind CSS, Swiper',
        isBest : false,
        links : [
            { git : 'https://github.com/krouu/pailkdabang' },
            { photo: '' },
            { link : 'https://pailkdabang.vercel.app/' },
            { figma : '' },
        ]
      },
      {
        title : '웹빌더 CMS 신규개발',
        date : '2025.03.19 - 2025.07.01(2人 팀 프로젝트)',
        content : '웹빌더 시스템 CMS 개발 담당',
        content_list : [
            '문의, 게시판, 사용자목록, 쿠폰, 회원가입 유형, 상품 배송설정 기능과 같이 쇼핑몰에 필요한 CMS 기능 개발',
            '프론트엔드부터 백엔드까지 개발 진행',
            '담당 CMS 페이지 데이터베이스 구조 설계',
            '다양한 기능을 신규 개발하며 관리자 편의성과 서비스 관리 효율성 향상'
        ],
        skill : 'PHP(CodeIgniter3), MySQL, HTML, CSS, JavaScript, Ajax',
        isBest : true,
        links : [
            { git : '' },
            { photo: '' },
            { link : '' },
            { figma : '' },
        ]
      },
      {
        title : 'CMS 사이트 소셜로그인 기능 개발',
        date : '2025.05 - 2025.06(1人 프로젝트)',
        content : '사이트 소셜로그인 기능 개발',
        content_list : [
            '소셜로그인 기능(Naver, Kakao, Google) 개발로 사용자 편의성 향상',
            'OPEN API를 통한 외부 서비스 연동 기능 개발',
            '프론트엔드부터 백엔드, 사용자의 정보를 저장하는 데이터베이스 설계까지 개발 진행',
            '소셜로그인 및 프록시 기능 도입으로 사용자 접근성과 사이트 확장성 강화'
        ],
        skill : 'PHP(CodeIgniter3), MySQL, HTML, CSS, JavaScript, Ajax, Open API',
        isBest : true,
        links : [
            { git : '' },
            { photo: '' },
            { link : '' },
            { figma : '' },
        ]
      },
      {
        title : '개인 포트폴리오',
        date : '2025.07.10 - 2025.07.11',
        content : '개인 포트폴리오',
        content_list : [
            '나만의 포트폴리오 웹사이트 개발',
        ],
        skill : 'HTML, CSS, JavaScript',
        isBest : false,
        links : [
            { git : 'https://github.com/krouu/portfolio_krou.git' },
            { photo: '' },
            { link : 'https://portfolio-krou-khq3.vercel.app/' },
            { figma : 'https://www.figma.com/design/l3VpRnG7xGvAtZ8AxuxfUh/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=3-2&t=KVIBokFaVyU7ljQG-1' },
        ]
      },
    ]

    const projectGroup = document.querySelector('.project-group');
    const radios = document.querySelectorAll('input[name="project"]');

    function renderProjects(filterId) {
        projectGroup.innerHTML = '';

        projectList.forEach(list => {
            if (filterId === 'project-best' && !list.isBest) return;

            const li = document.createElement('li');
            li.classList.add('list-group');

            let contentList = '';
            list.content_list.forEach(content => {
                contentList += `<li>✅ ${content}</li>`;
            });

            let iconList = '';
            list.links.forEach(link=> {
                if(link.git){
                    iconList += `
                        <a href='${link.git}'>
                            <svg aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                                <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                            </svg>
                        </a>
                    `;
                }

                if(link.photo){
                    iconList += `
                        <a href='${link.photo}'>
                            <i class="material-symbols-outlined">photo</i>
                        </a>
                    `;
                }

                if(link.link){
                    iconList += `
                        <a href='${link.link}'>
                            <i class="material-symbols-outlined">attachment</i>
                        </a>
                    `;
                }

                if(link.figma){
                    iconList += `
                        <a href='${link.figma}'>
                            <i class="material-symbols-outlined">palette</i>
                        </a>
                    `;
                }
            });

            li.innerHTML = `
                <div class="list-head">
                    <h3>${list.title}</h3>
                    <span>${list.date}</span>
                </div>
                <div class="list-body">
                    <div>
                        <strong>${list.content}</strong>
                    </div>
                    <div>
                        <ul>
                            ${contentList}
                        </ul>
                    </div>
                    <div class="skill-list">
                        <span>${list.skill}</span>
                    </div>
                    <div class="icons">
                        ${iconList}
                    </div>
                </div>
            `;
            projectGroup.appendChild(li);
        });
    }

    radios.forEach(r => {
        r.addEventListener('change', () => {
        renderProjects(r.id);
        });
    });

    const initialFilter = document.querySelector('input[name="project"]:checked').id;
    renderProjects(initialFilter);

    projectGroup.addEventListener('click', e => {
        const item = e.target.closest('.list-group');
        if (!item) return;
        console.log('sss');

        const body = item.querySelector('.list-body');
        if (!body) return;

        projectGroup.querySelectorAll('.list-body.active').forEach(b => {
        if (b !== body) b.classList.remove('active');
        });

        body.classList.toggle('active');
    });
});