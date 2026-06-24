import { FaXmark, FaChevronRight } from "react-icons/fa6";
import "./SidebarMenu.css";

function SidebarMenu({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />
      )}

      <aside
        id="sidebar-menu"
        className={`sidebar-menu ${isOpen ? "sidebar-menu--open" : ""}`}
        aria-label="Menu principal"
      >
        <div className="sidebar-header">
          <h2>Menu</h2>

          <button
            type="button"
            className="sidebar-close-button"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <FaXmark aria-hidden="true" focusable="false" />
          </button>
        </div>

        <section className="sidebar-user-card" aria-label="Account Area">
          <div className="sidebar-avatar" aria-hidden="true">
            A
          </div>

          <div>
            <strong>Hello, Ana!</strong>
            <p>ana@test.com</p>
          </div>

          <a href="/profile" className="sidebar-account-button">
            Profile
          </a>
        </section>

        <nav className="sidebar-nav" aria-label="Store navigation">
          <h3>Main Menu</h3>

          <ul>
            <li>
              <a href="/" className="sidebar-link">
                <span>Home</span>
                <FaChevronRight
                  className="sidebar-link-icon"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li>
              <a href="/produtos" className="sidebar-link">
                <span>All Products</span>
                <FaChevronRight
                  className="sidebar-link-icon"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>

          <h3>Categories</h3>

          <ul>
            <li>
              <a href="/category/crochet" className="sidebar-link">
                <span>Crochet</span>
                <FaChevronRight
                  className="sidebar-link-icon"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li>
              <a href="/category/embroidery" className="sidebar-link">
                <span>Embroidery</span>
                <FaChevronRight
                  className="sidebar-link-icon"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li>
              <a href="/category/ceramics" className="sidebar-link">
                <span>Ceramics</span>
                <FaChevronRight
                  className="sidebar-link-icon"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default SidebarMenu;
