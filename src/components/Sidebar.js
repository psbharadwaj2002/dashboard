import React from "react";
import dashboard from "../images/1.dashboard.png";
import lab_test from "../images/2.labtest.png";
import appointment from "../images/3.appointment.png";
import order from "../images/4.medicine_order.png";
import message from "../images/5.message.png";
import payment from "../images/6.payment.png";
import settings from "../images/7.settings.png";
import help from "../images/8.help.png";

function Sidebar() {
  return (
    <div className="Sidebar">
      <p>Medico Sales</p>
      <div className="buttons">
        <button>
          <img src={dashboard} alt="img" />
          Dashboard
        </button>
        <button>
          <img src={lab_test} alt="img" />
          Lab Test
        </button>
        <button>
          <img src={appointment} alt="img" />
          Appointment
        </button>
        <button>
          <img src={order} alt="img" />
          Medicine Order
        </button>
        <button>
          <img src={message} alt="img" />
          Message
        </button>
        <button>
          <img src={payment} alt="img" />
          Payment
        </button>
        <button>
          <img src={settings} alt="img" />
          Settings
        </button>
      </div>

      <button id="help">
        <img src={help} alt="img" />
        Help
      </button>
    </div>
  );
}

export default Sidebar;
