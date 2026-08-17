export const database = {
  wayne: {
    name: "Dresser / Wayne",
    platforms: {
      ixpay1: { 
        name: "iX Pay 1, 2.8 series", 
        versions: {
          "2.8.0": {
            emv: { contact: "Certified", contactless: "Not Certified" },
            options: [{ option: "Secure Card Reader", version: "1.0" }],
            notes: "Wayne iX Pay 1 standard configuration."
          }
        } 
      },
      ixpay2: { 
        name: "iX Pay 2, 3.1 Series", 
        versions: {
          "3.1.0": {
            emv: { contact: "Certified", contactless: "Certified" },
            options: [{ option: "Contactless Reader", version: "2.1" }],
            notes: "Wayne iX Pay 2 standard configuration."
          }
        } 
      },
      anthem: { name: "Anthem", versions: {} },
      blueboard: { name: "IX - Blue Board", versions: {} },
      vista3v: { name: "Vista3V", versions: {} },
      dualcat: { name: "Dual Cat", versions: {} },
      legacycat: { name: "Legacy Cat", versions: {} }
    }
  },
  gilbarco: {
    name: "Gilbarco",
    platforms: {
      flexpay4: { name: "Flexpay IV (M7)", versions: {} },
      flexpay2: { name: "Flexpay II (M5)", versions: {} },
      encore300: { name: "eNCORE 300", versions: {} },
      encore_eclipse: { name: "Encore/Eclipse", versions: {} }
    }
  },
  invenco: {
    name: "Invenco",
    platforms: {
      invenco_gvr: { name: "Invenco by GVR", versions: {} }
    }
  },
  tokheim: {
    name: "Tokheim",
    platforms: {
      premier_b: { name: "Premier B", versions: {} },
      premier_c: { name: "Premier C", versions: {} }
    }
  }
};