const employees = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        description: "Create responsive login page using React.",
        date: "2026-05-26",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        description: "Resolve responsive navbar issue.",
        date: "2026-05-20",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        description: "Connect frontend with backend API.",
        date: "2026-05-28",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        description: "Create admin dashboard UI.",
        date: "2026-05-27",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Profile Page",
        description: "Add profile image upload feature.",
        date: "2026-05-21",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        description: "Deploy application on Vercel.",
        date: "2026-05-22",
        category: "Deployment"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        description: "Build modern landing page.",
        date: "2026-05-29",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        description: "Compress website images for speed.",
        date: "2026-05-24",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Routing",
        description: "Configure React Router.",
        date: "2026-05-19",
        category: "React"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        description: "Prepare project documentation.",
        date: "2026-05-30",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Footer Issue",
        description: "Correct footer alignment.",
        date: "2026-05-18",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Setup",
        description: "Setup MongoDB collections.",
        date: "2026-05-23",
        category: "Database"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Application",
        description: "Perform UI testing.",
        date: "2026-05-31",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Charts",
        description: "Add analytics charts in dashboard.",
        date: "2026-05-25",
        category: "Data Visualization"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Authentication",
        description: "Implement JWT authentication.",
        date: "2026-05-17",
        category: "Security"
      }
    ]
  }
];

const admin = [{
  id: 101,
  email: "admin@gmail.com",
  password: "123"
}];

export const setLocalStorage = ()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
//  setItem data ko local storage me store krta hai Json.stringify data array form me dikhne ke lye
}

export const getLocalStorage = ()=>{

    const employees =JSON.parse( localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees , admin}  
// getItem data ko storage se use krne ke liye json.parse data array form me dikhne keliye
}