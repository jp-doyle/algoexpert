// O(1) time
// O(1) space

function validIPAddresses(string) {

  const addresses = [];

  function validAddresses(str, address = '', remainingPeriods = 3) {

    if (remainingPeriods === 0) {
      if (isValidNumber(str)) {
        const newAddress = address + str;
        addresses.push(newAddress);
      }
    } else {

        for (let i = 1; i < 4; i += 1) {
          const nextPartOfString = str.slice(0,i);
          const remainingString = str.slice(i);
          if (isValidNumber(nextPartOfString)) {
            let newAddress;
            if (remainingPeriods === 3) {
              newAddress = nextPartOfString + '.';
            } else {
              newAddress = address + nextPartOfString + '.';
            }
            validAddresses(remainingString, newAddress, remainingPeriods - 1);
          }
        }
    }
  }

  validAddresses(string);
  return addresses;
}