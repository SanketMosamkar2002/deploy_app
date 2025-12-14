import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <AppBar position="static" className="bg-white shadow-md" elevation={0}>
      <Toolbar className="flex justify-between px-4">
        {/* Left section */}
        <div className="flex items-center gap-2">
          <IconButton edge="start" className="md:hidden" aria-label="menu">
            {/* <MenuIcon className="text-gray-700" /> */}
          </IconButton>

          <Typography variant="h6" className="text-gray-800 font-semibold">
            MyApp
          </Typography>
        </div>

        {/* Middle links */}
        <div className="hidden md:flex gap-6">
          <button className="text-gray-600 hover:text-blue-600 font-medium">
            Home
          </button>
          <button className="text-gray-600 hover:text-blue-600 font-medium">
            About
          </button>
          <button className="text-gray-600 hover:text-blue-600 font-medium">
            Services
          </button>
          <button className="text-gray-600 hover:text-blue-600 font-medium">
            Contact
          </button>
        </div>

        {/* Right section */}
        <div className="flex gap-3">
          <Button
            variant="outlined"
            className="border-blue-600 text-blue-600"
          >
            Login
          </Button>
          <Button
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default App;
