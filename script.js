// 포트폴리오 데이터 관리 (5개 샘플 데이터)
// 새로운 프로젝트가 생기면 이 배열에 객체를 추가하기만 하면 됩니다.
const projects = [
    {
        title: "Dstation CenterPost 웹 포탈",
        period: "2022.12 - 2025.05",
        description: "Dstation 서비스의 사용자 편의성 향상을 위한 통합 관리 및 모니터링 웹 포탈 시스템 개발 및 운영",
        tags: ["Vue.js", "Spring", "MyBatis", "MariaDB"],
        image: "https://via.placeholder.com/400x250", // 본인 이미지 경로로 변경 (예: 'images/project1.png')
        githubLink: "https://github.com/본인계정/저장소명",
        liveLink: "https://서비스주소.com"
    },
    {
        title: "통합 인증 포탈 구축",
        period: "2023.08 - 2023.10",
        description: "사내/외 기업 고객용 보안 및 계정 관리를 위한 SSO 연동 통합 인증 포탈 시스템 구현",
        tags: ["JavaScript", "HTML/CSS", "Spring Security"],
        image: "https://via.placeholder.com/400x250",
        githubLink: "https://github.com/본인계정/저장소명",
        liveLink: "" // 링크가 없다면 빈 문자열 처리
    },
    {
        title: "Workat 워케이션 숙소 예약 사이트",
        period: "2024.05 - 2024.06",
        description: "원격 근무자들을 위한 지역별 워케이션 숙소 탐색 및 실시간 예약 관리가 가능한 토이 프로젝트",
        tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
        image: "https://via.placeholder.com/400x250",
        githubLink: "https://github.com/본인계정/저장소명",
        liveLink: "https://workat-demo.com"
    },
    {
        title: "실시간 지하철 데이터 파이프라인 & 대시보드",
        period: "2026.04 - 2026.05",
        description: "공공 API 기반 실시간 지하철 위치 및 혼잡도 데이터를 정제(ETL)하여 시각화한 대시보드 화면",
        tags: ["Python", "Vue.js", "D3.js", "FastAPI"],
        image: "https://via.placeholder.com/400x250",
        githubLink: "https://github.com/본인계정/저장소명",
        liveLink: ""
    },
    {
        title: "파이썬 오목 게임 및 엔진",
        period: "2026.03 - 2026.03",
        description: "렌주룰 규칙(33 금지, 44 금지, 6목 불가 옵션)을 선택하여 커스텀 매치가 가능한 오목 대전 프로그램",
        tags: ["Python", "Pygame"],
        image: "https://via.placeholder.com/400x250",
        githubLink: "https://github.com/본인계정/저장소명",
        liveLink: ""
    }
];

// DOM 로드 완료 후 카드 동적 렌더링
document.addEventListener("DOMContentLoaded", () => {
    const portfolioGrid = document.getElementById("portfolio-grid");
    
    // 데이터를 기반으로 HTML 구조 생성
    const cardHTML = projects.map(project => {
        // 태그 템플릿 생성
        const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
        
        // 라이브 링크 보임 여부 처리
        const liveButton = project.liveLink 
            ? `<a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` 
            : '';

        return `
            <div class="portfolio-card">
                <div class="card-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="card-content">
                    <h3>${project.title}</h3>
                    <div class="period">${project.period}</div>
                    <p>${project.description}</p>
                    <div class="card-tags">
                        ${tagsHTML}
                    </div>
                    <div class="card-links">
                        <a href="${project.githubLink}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                        ${liveButton}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 그리드 영역에 주입
    portfolioGrid.innerHTML = cardHTML;
});