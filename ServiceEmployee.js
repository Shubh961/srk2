import axios from "axios";
export async function saveEmployees(employeeData) {
  try {
    const response = await axios.post(
      "http://localhost:9090/register/user-register",
      employeeData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Fetch Employees
export async function fetchEmployees() {
  try {
    const response = await axios.get("http://localhost:9090/register/emplist");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//DeleteEmployee

export async function deleteEmployee(id) {
  try {
    const response = await axios.delete(
      `http://localhost:9090/register/emplist/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Update

export async function updateEmployee(formdata, id) {
  try {
    const response = await axios.put(
      `http://localhost:9090/register/emplist/${id}`,
      formdata // Include the formdata in the request
    );
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error; // Throw the error to let the calling code handle it
  }
}

// getEmployee

export async function getEmployee(id) {
  try {
    const response = await axios.get(
      `http://localhost:9090/register/emplist/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee data:", error);
    throw error; // Throw the error to let the calling code handle it
  }
}
