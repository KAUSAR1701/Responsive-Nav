import { IoMdGitCompare, IoIosContacts} from "react-icons/io";
import { GiSelfLove, GiHeadphones } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

import {
  BrowsItem,
  Contact,
  DropDown,
  Header,
  MainMenu,
  MegaMenu,
  MenuBar,
  NavItem,
  NavbarBrand,
  SearchBar,
  SideItems,
  Sidebar,
} from "responsive-navigation";

const Navigation = () => {
  return (
    <MegaMenu
    style={{
      backgroundColor: "white",
      borderBottom: "1px solid #dee2e6",
      padding: "20px 0",
    }}
  >
    <Header>
      <NavbarBrand>
        <a href="/Home" style={{ fontSize: "30px", fontWeight: "700" }}>
          <img src="/Logo.png" alt="Logo" />
        </a>
      </NavbarBrand>
      <SearchBar>
        <input
          type="text"
          placeholder="Search for items..."
          style={{
            width: "100%",
            padding: "12px 10px",
            borderRadius: "10px",
          }}
        />
      </SearchBar>
      <SideItems>
        <a href="/">
          <span className="icon">
          <IoMdGitCompare/>
            <span
              className="badge"
              style={{ backgroundColor: "#0d6efd", color: "#fff" }}
            >
              2
            </span>
          </span>
          <span className="icon_base">Compare</span>
        </a>
      </SideItems>
      <SideItems>
        <a href="/">
          <span className="icon">
            <GiSelfLove/>
            <span
              className="badge"
              style={{ backgroundColor: "#0d6efd", color: "#fff" }}
            >
              2
            </span>
          </span>
          <span className="icon_base">Wishlist</span>
        </a>
      </SideItems>
      <SideItems>
        <a href="/">
          <span className="icon">
            <FaShoppingCart/>
            <span
              className="badge"
              style={{ backgroundColor: "#0d6efd", color: "#fff" }}
            >
              2
            </span>
          </span>
          <span className="icon_base">Cart</span>
        </a>
      </SideItems>
      <SideItems>
        <a href="/">
          <span className="icon">
            <IoIosContacts/>
          </span>
          <span className="icon_base">Contact</span>
        </a>
      </SideItems>
    </Header>
    <MainMenu
      style={{
        padding: "20px 0",
      }}
    >
      <Sidebar
      title="Browse All Categories"
      style={{ backgroundColor: "#3BB77E", color: "white" }}
    >
      <div className="w-80 flex gap-4">
      <BrowsItem>
        <a>
          <img src="/category-1.svg" alt="category-1" className="w-6"/>
          <span className="cursor-pointer font-bold text-sm text-primary hover:text-brand ">Milk & Dairies</span>
        </a>
      </BrowsItem>
      <BrowsItem>
        <a>
          <img src="/category-2.svg" alt="category-2" className="w-6"/>
          <span className="cursor-pointer font-bold text-sm text-primary hover:text-brand">Wines & Drinks</span>
        </a>
      </BrowsItem>
      </div>
      <div className="w-80 flex gap-4">
      <BrowsItem>
        <a>
          <img src="/category-1.svg" alt="category-1" className="w-6"/>
          <span className="cursor-pointer font-bold text-sm text-primary hover:text-brand ">Milk & Dairies</span>
        </a>
      </BrowsItem>
      <BrowsItem>
        <a>
          <img src="/category-2.svg" alt="category-2" className="w-6"/>
          <span className="cursor-pointer font-bold text-sm text-primary hover:text-brand">Wines & Drinks</span>
        </a>
      </BrowsItem>
      </div>
      <div className="w-80 flex gap-4">
      <BrowsItem>
        <a>
          <img src="/category-1.svg" alt="category-1" className="w-6"/>
          <span className="cursor-pointer font-bold text-sm text-primary hover:text-brand ">Milk & Dairies</span>
        </a>
      </BrowsItem>
      <BrowsItem>
        <a>
          <img src="/category-2.svg" alt="category-2" className="w-6"/>
          <span className="cursor-pointer font-bold text-sm text-primary hover:text-brand">Wines & Drinks</span>
        </a>
      </BrowsItem>
      </div>
      <div className="w-80 flex gap-4">
      <BrowsItem>
        <a>
          <img src="/category-1.svg" alt="category-1" className="w-6"/>
          <span className="cursor-pointer font-bold text-sm text-primary hover:text-brand ">Milk & Dairies</span>
        </a>
      </BrowsItem>
      <BrowsItem>
        <a>
          <img src="/category-2.svg" alt="category-2" className="w-6"/>
          <span className="cursor-pointer font-bold text-sm text-primary hover:text-brand">Wines & Drinks</span>
        </a>
      </BrowsItem>
      </div>
      <div className="w-80 flex gap-4">
      <BrowsItem>
        <a>
          <img src="/category-1.svg" alt="category-1" className="w-6"/>
          <span className="cursor-pointer font-bold text-sm text-primary hover:text-brand ">Milk & Dairies</span>
        </a>
      </BrowsItem>
      <BrowsItem>
        <a>
          <img src="/category-2.svg" alt="category-2" className="w-6"/>
          <span className="cursor-pointer font-bold text-sm text-primary hover:text-brand">Wines & Drinks</span>
        </a>
      </BrowsItem>
      </div>
      <button className="text-brand cursor-pointer"> Show More...</button>
    </Sidebar>
      <MenuBar>
      <NavItem style={{fontSize: "16", fontWeight: "bold", fontFamily: "Quicksand"}}>
          <a href="/">Deals</a>
        </NavItem>
        <NavItem>
          <a href="/">Home</a>
        </NavItem>
        <NavItem>
          <a href="/">About</a>
        </NavItem>
        <DropDown
          label="Shop "
          style={{ width: "100px", backgroundColor: "white" }}
        >
          <NavItem>
            <a href="/">Shop  1</a>
          </NavItem>
          <NavItem>
            <a href="/">Shop  2</a>
          </NavItem>
          <NavItem>
            <a href="/">Shop  3</a>
          </NavItem>
          <DropDown
            label="Shop 4"
            style={{ width: "100px", backgroundColor: "white" }}
          >
            <NavItem>
              <a href="/">Shop  1</a>
            </NavItem>
            <NavItem>
              <a href="/">Shop  2</a>
            </NavItem>
            <NavItem>
              <a href="/">Shop  3</a>
            </NavItem>
          </DropDown>
        </DropDown>
        <DropDown
          label="Vendors"
          style={{ width: "100px", backgroundColor: "white" }}
        >
          <NavItem>
            <a href="/">Vendors  1</a>
          </NavItem>
          <NavItem>
            <a href="/">Vendors  2</a>
          </NavItem>
          <NavItem>
            <a href="/">Vendors  3</a>
          </NavItem>
        </DropDown>
        <DropDown
          label="Mega menu  "
          style={{ width: "100px", backgroundColor: "white" }}
        >
          <NavItem>
            <a href="/">Mega menu   1</a>
          </NavItem>
          <NavItem>
            <a href="/">Mega menu   2</a>
          </NavItem>
          <NavItem>
            <a href="/">Mega menu   3</a>
          </NavItem>
        </DropDown>
        <DropDown
          label="Blog  "
          style={{ width: "100px", backgroundColor: "white" }}
        >
          <NavItem>
            <a href="/">Blog   1</a>
          </NavItem>
          <NavItem>
            <a href="/">Blog   2</a>
          </NavItem>
          <NavItem>
            <a href="/">Blog   3</a>
          </NavItem>
        </DropDown>
        <DropDown
          label="Pages   "
          style={{ width: "100px", backgroundColor: "white" }}
        >
          <NavItem>
            <a href="/">Page 1</a>
          </NavItem>
          <NavItem>
            <a href="/">Page 2</a>
          </NavItem>
          <NavItem>
            <a href="/">Page 3</a>
          </NavItem>
        </DropDown>
        <NavItem>
          <a href="/">Contact</a>
        </NavItem>
      </MenuBar>
      <Contact>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <GiHeadphones/>
          <p style={{ display: "flex", flexDirection: "column" }}>
            <span style={{color: "#3BB77E", fontSize: "26", fontWeight: "bold", fontFamily: "quicksand"}}>1900 - 888</span>
            <span style={{color: "#7E7E7E", fontSize: "12", fontWeight: "medium", fontFamily: "lato"}}>24/7 Support Center</span>
          </p>
        </div>
      </Contact>
    </MainMenu>
  </MegaMenu>
  )
}

export default Navigation
