/* eslint-disable @typescript-eslint/no-explicit-any */
async function getUsersData(page = 1, limit = 10) {
  try {
    const response = await fetch(
      `https://retoolapi.dev/pmCQ7k/usersdata?_page=${page}&_limit=${limit}`,
      {
        cache: "no-cache",
      }
    );
    const data = await response.json();
    // await new Promise((res) => setTimeout(res, 5000));
    return data;
  } catch (error: any) {
    throw error;
  }
}
async function getAllUsersData() {
  try {
    const response = await fetch(`https://retoolapi.dev/pmCQ7k/usersdata`, {
      cache: "force-cache",
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw error;
  }
}
async function getUsersOverallData(page = 1, limit = 10) {
  try {
    const response = await fetch(
      `https://retoolapi.dev/7V3hgj/overall_data?_page=${page}&_limit=${limit}`
      //   {
      //     cache: "force-cache",
      //   }
    );
    const data = await response.json();
    await new Promise((res) => setTimeout(res, 2000));
    return data;
  } catch (error: any) {
    throw error;
  }
}

async function getUserData(id: number) {
  try {
    const response = await fetch(
      `https://retoolapi.dev/pmCQ7k/usersdata/${id}`,
      {
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

function getUserInformation() {
  const storedInformation = localStorage.getItem("userInfo");

  if (!storedInformation) {
    const userInfo = {
      personalInformation: {
        name: "Grace Effiom",
        netWorth: 200000,
        phoneNumber: "07060780922",
        bvn: "1234567890",
        email: "grace@gmail.com",
        gender: "female",
        maritalStatus: "Single",
        children: "none",
        typeOfResidence: "Parent's Apartment",
      },
      bankDetails: {
        bankName: "Providus Bank",
        accountNumber: "9912345678",
      },
      employmentInfo: {
        levelOfEducation: "B.Sc",
        status: "Employed",
        sectorOfEmployment: "Fintech",
        employmentDuration: "2 years",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "₦200,000.00- ₦400,000.00",
        loanRepayment: 40000,
      },
      socialMediaInfo: {
        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",
      },
      guarantorInfo: {
        name: "Debby Ogana",
        phoneNumber: "07060780922",
        email: "debby@gmail.com",
        relationship: "Sister",
      },
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
}
export {
  getUsersData,
  getUsersOverallData,
  getAllUsersData,
  getUserData,
  getUserInformation,
};
