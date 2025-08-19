// 赏金猎人工会网站 - 主JavaScript文件

document.addEventListener('DOMContentLoaded', function() {
    console.log('赏金猎人工会网站已加载');
    
    // 初始化所有功能
    initNavigation();
    initButtons();
    initAnimations();
    initStats();
});

// 导航功能
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 按钮功能
function initButtons() {
    const joinBtn = document.querySelector('.btn-primary');
    const missionBtn = document.querySelector('.btn-secondary');
    
    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            showModal('加入工会', '感谢您对赏金猎人工会的兴趣！我们的团队将尽快与您联系。');
        });
    }
    
    if (missionBtn) {
        missionBtn.addEventListener('click', function() {
            showModal('查看任务', '任务列表功能正在开发中，敬请期待！');
        });
    }
}

// 动画效果
function initAnimations() {
    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 统计数字动画
function initStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateNumber = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 20);
    };
    
    // 当统计区域进入视口时开始动画
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numbers = entry.target.querySelectorAll('.stat-number');
                numbers.forEach(number => {
                    const target = parseInt(number.textContent);
                    animateNumber(number, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// 模态框功能
function showModal(title, message) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <span class="close">&times;</span>
            </div>
            <div class="modal-body">
                <p>${message}</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary modal-close">确定</button>
            </div>
        </div>
    `;
    
    // 添加模态框样式
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
        }
        .modal-content {
            background: white;
            border-radius: 10px;
            max-width: 500px;
            width: 90%;
            max-height: 80%;
            overflow: auto;
        }
        .modal-header {
            padding: 1rem;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .modal-header h3 {
            margin: 0;
            color: #2c3e50;
        }
        .close {
            font-size: 1.5rem;
            cursor: pointer;
            color: #999;
        }
        .close:hover {
            color: #333;
        }
        .modal-body {
            padding: 1rem;
        }
        .modal-footer {
            padding: 1rem;
            border-top: 1px solid #eee;
            text-align: right;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // 关闭模态框功能
    const closeModal = () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    };
    
    modal.querySelector('.close').addEventListener('click', closeModal);
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// 平滑滚动功能
function smoothScrollTo(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 响应式导航菜单
function initMobileMenu() {
    const nav = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    // 在小屏幕上添加汉堡菜单
    if (window.innerWidth <= 768) {
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '☰';
        hamburger.style.cssText = `
            display: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: white;
        `;
        
        nav.insertBefore(hamburger, navMenu);
        
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // 添加移动端样式
        const mobileStyle = document.createElement('style');
        mobileStyle.textContent = `
            @media (max-width: 768px) {
                .hamburger {
                    display: block !important;
                }
                .nav-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background: #1e3c72;
                    flex-direction: column;
                    padding: 1rem 0;
                }
                .nav-menu.active {
                    display: flex;
                }
            }
        `;
        document.head.appendChild(mobileStyle);
    }
}

// 页面加载完成后初始化移动端菜单
window.addEventListener('load', initMobileMenu);
