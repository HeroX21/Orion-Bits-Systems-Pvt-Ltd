const siteMeta = {
  brandName: "Orion Bits Systems Pvt Ltd",
  logoPath: "assets/images/orion-bits-logo.png",
  phone: "+91 80 5555 0147",
  email: "hello@orionbitsystems.com",
  address: "Bengaluru, Chennai, Hyderabad",
  navigation: [
    { type: "link", key: "home", label: "Home", href: "index.html" },
    {
      type: "dropdown",
      key: "about-group",
      label: "About",
      pages: ["about", "contact"],
      items: [
        {
          label: "About Orion",
          copy: "Who we are and how we think about transformation.",
          href: "about.html"
        },
        {
          label: "Mission & Vision",
          copy: "Explore Orion's purpose, direction, and values.",
          href: "about.html#mission"
        },
        {
          label: "Office Locations",
          copy: "See our India delivery hubs and contact details.",
          href: "contact.html#locations"
        }
      ]
    },
    {
      type: "dropdown",
      key: "solutions-group",
      label: "Solutions",
      pages: ["solutions", "services", "insights"],
      items: [
        {
          label: "Zoho CRM Solutions",
          copy: "Sales, finance, support, and automation on Zoho.",
          href: "solutions.html"
        },
        {
          label: "Low-Code Development",
          copy: "Enterprise workflows delivered faster with modern low-code platforms.",
          href: "services.html"
        },
        {
          label: "Case Studies",
          copy: "See how Orion applies automation in the real world.",
          href: "insights.html"
        }
      ]
    },
    { type: "link", key: "insights", label: "Insights", href: "insights.html" },
    { type: "link", key: "contact", label: "Contact", href: "contact.html" }
  ]
};

const currentPage = document.body.dataset.page || "";

function iconChevron() {
  return `
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `;
}

function socialIcon(name) {
  const icons = {
    linkedin: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 9H3V21H7V9Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
        <path d="M5 6.5C6.10457 6.5 7 5.60457 7 4.5C7 3.39543 6.10457 2.5 5 2.5C3.89543 2.5 3 3.39543 3 4.5C3 5.60457 3.89543 6.5 5 6.5Z" stroke="currentColor" stroke-width="1.7"></path>
        <path d="M11 21V9H15V10.8C15.6372 9.59633 17.0457 8.75 18.8 8.75C21.2835 8.75 22 10.6101 22 13.25V21H18V14.1C18 12.6364 17.6235 11.75 16.25 11.75C14.7422 11.75 15 13.8941 15 15V21H11Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
      </svg>
    `,
    twitter: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4L10.889 13.206L4.051 20H5.599L11.581 14.059L16.02 20H20L12.723 10.264L19.091 4H17.543L12.031 9.411L8 4H4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
      </svg>
    `,
    mail: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6H20V18H4V6Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
        <path d="M4 7L12 13L20 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `,
    globe: `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"></circle>
        <path d="M3.5 12H20.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
        <path d="M12 3C14.7614 5.85971 16.3074 8.84012 16.3074 12C16.3074 15.1599 14.7614 18.1403 12 21C9.23858 18.1403 7.69263 15.1599 7.69263 12C7.69263 8.84012 9.23858 5.85971 12 3Z" stroke="currentColor" stroke-width="1.7"></path>
      </svg>
    `
  };

  return icons[name] || "";
}

function renderBrand({ footer = false } = {}) {
  return `
    <a href="index.html" class="site-brand${footer ? " site-brand--footer" : ""}" aria-label="${siteMeta.brandName} home">
      <img
        src="${siteMeta.logoPath}"
        alt="${siteMeta.brandName} logo"
        class="site-brand-logo"
        width="420"
        height="420"
      >
    </a>
  `;
}

function isItemActive(item) {
  if (item.type === "link") {
    return item.key === currentPage;
  }

  return Array.isArray(item.pages) && item.pages.includes(currentPage);
}

function renderDesktopNavigation() {
  return siteMeta.navigation
    .map((item) => {
      if (item.type === "link") {
        return `
          <a href="${item.href}" class="nav-link${isItemActive(item) ? " is-active" : ""}">
            ${item.label}
          </a>
        `;
      }

      return `
        <div class="nav-dropdown" data-dropdown>
          <button type="button" class="nav-dropdown-toggle${isItemActive(item) ? " is-active" : ""}" aria-expanded="false">
            ${item.label}
            ${iconChevron()}
          </button>
          <div class="dropdown-menu" role="menu">
            ${item.items
              .map((subItem) => {
                const subActive = subItem.href.startsWith(`${currentPage}.html`) || subItem.href === `${currentPage}.html`;
                return `
                  <a href="${subItem.href}" class="dropdown-item${subActive ? " is-active" : ""}" role="menuitem">
                    <span class="dropdown-label">${subItem.label}</span>
                    <span class="dropdown-copy">${subItem.copy}</span>
                  </a>
                `;
              })
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

function renderMobileNavigation() {
  return siteMeta.navigation
    .map((item) => {
      if (item.type === "link") {
        return `
          <a href="${item.href}" class="mobile-link${isItemActive(item) ? " is-active" : ""}">
            ${item.label}
          </a>
        `;
      }

      return `
        <div class="mobile-dropdown${isItemActive(item) ? " is-open" : ""}" data-mobile-dropdown>
          <button type="button" class="mobile-dropdown-toggle${isItemActive(item) ? " is-active" : ""}" aria-expanded="${isItemActive(item)}">
            <span>${item.label}</span>
            ${iconChevron()}
          </button>
          <div class="mobile-dropdown-panel">
            ${item.items
              .map(
                (subItem) => `
                  <a href="${subItem.href}" class="mobile-dropdown-item">
                    ${subItem.label}
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

function renderHeader() {
  return `
    <header class="site-header">
      <div class="site-header-wrap">
        <nav class="site-nav-shell" aria-label="Primary">
          ${renderBrand()}

          <div class="site-nav-desktop">
            ${renderDesktopNavigation()}
          </div>

          <a href="contact.html" class="primary-button site-nav-cta">Book a Consultation</a>

          <button type="button" class="site-mobile-toggle" data-mobile-toggle aria-expanded="false" aria-controls="site-mobile-panel">
            <span class="sr-only">Toggle navigation</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
            </svg>
          </button>
        </nav>

        <div id="site-mobile-panel" class="site-mobile-panel" data-mobile-panel>
          ${renderMobileNavigation()}
          <a href="contact.html" class="primary-button mt-3">Book a Consultation</a>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="site-footer-wrap">
        <div class="footer-grid">
          <div>
            ${renderBrand({ footer: true })}
            <p class="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Premium consulting and build services for AI-powered publishing workflows, Zoho-led business automation, and enterprise low-code delivery.
            </p>
            <div class="mt-6 social-links">
              <a href="https://www.linkedin.com/" class="social-link" aria-label="LinkedIn">${socialIcon("linkedin")}</a>
              <a href="https://x.com/" class="social-link" aria-label="X">${socialIcon("twitter")}</a>
              <a href="mailto:${siteMeta.email}" class="social-link" aria-label="Email">${socialIcon("mail")}</a>
              <a href="contact.html" class="social-link" aria-label="Website">${socialIcon("globe")}</a>
            </div>
          </div>

          <div>
            <h2 class="footer-heading">Pages</h2>
            <div class="mt-5 space-y-3 text-sm">
              <a href="index.html" class="footer-link">Home</a>
              <a href="about.html" class="footer-link">About Orion</a>
              <a href="solutions.html" class="footer-link">Zoho Solutions</a>
              <a href="services.html" class="footer-link">Low-Code Services</a>
              <a href="insights.html" class="footer-link">Insights</a>
              <a href="contact.html" class="footer-link">Contact</a>
            </div>
          </div>

          <div>
            <h2 class="footer-heading">Capabilities</h2>
            <div class="mt-5 space-y-3 text-sm text-slate-300">
              <p>AI-powered publishing systems</p>
              <p>Zoho CRM, Books, Creator, Desk</p>
              <p>Odoo-enabled operations visibility</p>
              <p>Workflow design and low-code delivery</p>
            </div>
          </div>

          <div>
            <h2 class="footer-heading">Connect</h2>
            <div class="mt-5 space-y-3 text-sm text-slate-300">
              <p><a href="mailto:${siteMeta.email}" class="footer-link">${siteMeta.email}</a></p>
              <p><a href="tel:${siteMeta.phone.replace(/\s+/g, "")}" class="footer-link">${siteMeta.phone}</a></p>
              <p>${siteMeta.address}</p>
              <p>Consulting, implementation, and managed optimization.</p>
            </div>
            <a href="contact.html" class="secondary-button mt-6">Start a Project</a>
          </div>
        </div>

        <div class="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex md:items-center md:justify-between">
          <p>&copy; <span data-year></span> ${siteMeta.brandName}. All rights reserved.</p>
          <p class="mt-3 md:mt-0">Built for enterprise teams that want clarity, velocity, and control.</p>
        </div>
      </div>
    </footer>
  `;
}

function hydrateShell() {
  const headerTarget = document.querySelector("[data-site-header]");
  const footerTarget = document.querySelector("[data-site-footer]");

  if (headerTarget) {
    headerTarget.innerHTML = renderHeader();
  }

  if (footerTarget) {
    footerTarget.innerHTML = renderFooter();
  }
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-mobile-toggle]");
  const panel = document.querySelector("[data-mobile-panel]");

  if (!toggle || !panel) {
    return;
  }

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("is-open", !expanded);
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });
}

function initDropdowns() {
  const dropdowns = Array.from(document.querySelectorAll("[data-dropdown]"));
  const mobileDropdowns = Array.from(document.querySelectorAll("[data-mobile-dropdown]"));

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".nav-dropdown-toggle");

    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = dropdown.classList.contains("is-open");
      dropdowns.forEach((entry) => {
        entry.classList.remove("is-open");
        const entryToggle = entry.querySelector(".nav-dropdown-toggle");
        if (entryToggle) {
          entryToggle.setAttribute("aria-expanded", "false");
        }
      });

      if (!isOpen) {
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    dropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 1024) {
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth >= 1024) {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".nav-dropdown-toggle");
      dropdown.classList.remove("is-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  mobileDropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".mobile-dropdown-toggle");

    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = dropdown.classList.contains("is-open");
      dropdown.classList.toggle("is-open", !isOpen);
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

function initFaqs() {
  document.querySelectorAll("[data-faq-item]").forEach((item) => {
    const button = item.querySelector("[data-faq-button]");

    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll("[data-faq-item]").forEach((entry) => {
        entry.classList.remove("is-open");
        const entryButton = entry.querySelector("[data-faq-button]");
        if (entryButton) {
          entryButton.setAttribute("aria-expanded", "false");
        }
      });

      if (!isOpen) {
        item.classList.toggle("is-open", !isOpen);
        button.setAttribute("aria-expanded", String(!isOpen));
      }
    });
  });
}

function initTabs() {
  document.querySelectorAll("[data-tab-group]").forEach((group) => {
    const buttons = Array.from(group.querySelectorAll("[data-tab-button]"));
    const panels = Array.from(group.querySelectorAll("[data-tab-panel]"));

    if (!buttons.length || !panels.length) {
      return;
    }

    const activate = (target) => {
      buttons.forEach((button) => {
        const active = button.dataset.tabButton === target;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", String(active));
      });

      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.tabPanel === target);
      });
    };

    const defaultButton = buttons.find((button) => button.hasAttribute("data-tab-default")) || buttons[0];
    activate(defaultButton.dataset.tabButton);

    buttons.forEach((button) => {
      button.addEventListener("click", () => activate(button.dataset.tabButton));
    });
  });
}

function initCaseFilters() {
  const grid = document.querySelector("[data-case-grid]");
  const state = {};

  if (!grid) {
    return;
  }

  const items = Array.from(grid.querySelectorAll("[data-case-item]"));
  const groups = Array.from(document.querySelectorAll("[data-filter-group]"));

  if (!items.length || !groups.length) {
    return;
  }

  groups.forEach((group) => {
    const key = group.dataset.filterGroup;
    const buttons = Array.from(group.querySelectorAll("[data-filter-value]"));
    const defaultButton = buttons.find((button) => button.hasAttribute("data-filter-default")) || buttons[0];
    state[key] = defaultButton ? defaultButton.dataset.filterValue : "all";

    const activateButton = (value) => {
      state[key] = value;
      buttons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.filterValue === value);
      });

      items.forEach((item) => {
        const visible = Object.entries(state).every(([filterKey, filterValue]) => {
          if (filterValue === "all") {
            return true;
          }

          const values = (item.dataset[filterKey] || "")
            .split(" ")
            .map((entry) => entry.trim())
            .filter(Boolean);

          return values.includes(filterValue);
        });

        item.classList.toggle("is-hidden", !visible);
      });
    };

    activateButton(state[key]);

    buttons.forEach((button) => {
      button.addEventListener("click", () => activateButton(button.dataset.filterValue));
    });
  });
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");

  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

function injectYear() {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");

  if (!form) {
    return;
  }

  const successMessage = form.querySelector("[data-form-success]");
  const fields = ["name", "email", "phone", "company", "message"];

  const validators = {
    name: (value) => value.trim().length >= 2 || "Please enter your full name.",
    email: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || "Please enter a valid email address.",
    phone: (value) =>
      value.trim() === "" || /^[+\d()\s-]{7,}$/.test(value.trim()) || "Please enter a valid phone number.",
    company: () => true,
    message: (value) => value.trim().length >= 10 || "Please share a short project brief."
  };

  const setError = (fieldName, message = "") => {
    const errorNode = form.querySelector(`[data-error-for="${fieldName}"]`);
    if (errorNode) {
      errorNode.textContent = message;
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    fields.forEach((fieldName) => {
      const input = form.elements[fieldName];
      if (!input) {
        return;
      }

      const result = validators[fieldName](input.value);
      if (result !== true) {
        isValid = false;
        setError(fieldName, result);
      } else {
        setError(fieldName);
      }
    });

    if (!isValid) {
      if (successMessage) {
        successMessage.classList.remove("is-visible");
      }
      return;
    }

    form.reset();
    if (successMessage) {
      successMessage.classList.add("is-visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hydrateShell();
  initMobileMenu();
  initDropdowns();
  initFaqs();
  initTabs();
  initCaseFilters();
  initReveal();
  injectYear();
  initContactForm();
});
