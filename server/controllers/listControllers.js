const List = require("../models/listModel");
const HttpError = require("../models/errorModel");

// =========================== Create Entry ===========================
// Protected

const createEntry = async (req, res, next) => {
    try {
        let { comName, comPersonName, comEmail, comMobile, comAddress } = req.body;
        if (!comName || !comPersonName || !comEmail || !comMobile || !comAddress) {
            return next(new HttpError("Fill in all fields.", 422));
        }

        const newComEmail = comEmail.toLowerCase();
        const emailExists = await List.findOne({ comEmail: newComEmail });
        if (emailExists) {
            return next(new HttpError("Email already exists.", 422));
        }

        const newComMobile = comMobile;
        if (newComMobile.length !== 10) {
            return next(new HttpError("Mobile Number should have 10 digits only."));
        }

        const numberExists = await List.findOne({ comMobile: newComMobile });
        if (numberExists) {
            return next(new HttpError("Mobile Number is already existing."));
        }

        const newComAddress = comAddress;
        if (newComAddress.length < 10) {
            return next(new HttpError("Address is too short."));
        }

        const newCompany = await List.create({ comName, comPersonName, comEmail: newComEmail, comMobile: newComMobile, comAddress: newComAddress });
        res.status(201).json(`New Company added successfully as ${newCompany.comName}`);
    } catch (error) {
        return next(new HttpError(error));
    }
};

// =========================== Get All Entries ===========================
// Unprotected

const getEntries = async (req, res, next) => {
    try {
        const lists = await List.find().sort({ updatedAt: -1 });
        res.status(200).json(lists);
    } catch (error) {
        return next(new HttpError(error));
    }
};

// =========================== Edit Entry ===========================
// Protected

const editEntry = async (req, res, next) => {
    try {
        const listId = req.params.id;
        console.log(listId);

        let { comName, comPersonName, comEmail, comMobile, comAddress } = req.body;

        if (!comName || !comPersonName || !comEmail || !comMobile || !comAddress) {
            return next(new HttpError("Fill in all fields.", 422));
        }

        const listEntry = await List.findById(listId);
        if (!listEntry) {
            return next(new HttpError("Entry not found!", 403));
        }

        const newComEmail = comEmail.toLowerCase();
        const emailExists = await List.findOne({ comEmail: newComEmail });
        if (emailExists && emailExists._id != listId) {
            return next(new HttpError("Email already exists.", 422));
        }

        const newComMobile = comMobile;
        if (newComMobile.length !== 10) {
            return next(new HttpError("Mobile Number should have 10 digits only."));
        }

        const numberExists = await List.findOne({ comMobile: newComMobile });
        if (numberExists && numberExists._id != listId) {
            return next(new HttpError("Mobile Number is already existing."));
        }

        const newComAddress = comAddress;
        if (newComAddress.length < 10) {
            return next(new HttpError("Address is too short."));
        }

        const updatedCompany = await List.findByIdAndUpdate(listId, {
            comName,
            comPersonName,
            comEmail: newComEmail,
            comMobile: newComMobile,
            comAddress: newComAddress,
        });

        if (!updatedCompany) {
            return next(new HttpError("Couldn't Update Entry."));
        }

        res.status(201).json(`Updated Successfully with the name ${updatedCompany.comName}`);
    } catch (error) {
        return next(new HttpError(error));
    }
};

// =========================== Delete Entry ===========================
// Protected

const deleteEntry = async (req, res, next) => {
    try {
        const entry = req.params.id;
        const listId = await List.findById(entry);
        if (!listId) {
            return next(new HttpError("Entry unavailable.", 400));
        }
        console.log(listId.id);

        try {
            await List.findByIdAndDelete(entry);
        } catch (error) {
            return next(new HttpError("Couldn't Delete the Entry."));
        }

        res.json(`Entry ${listId.id} deleted successfully.`);
    } catch (error) {
        return next(new HttpError(error));
    }

    // try {
    //     const lists = await List.find().sort({ updatedAt: -1 });
    //     res.status(200).json(lists);
    // } catch (error) {
    //     return next(new HttpError(error));
    // }
};

module.exports = { createEntry, getEntries, editEntry, deleteEntry };
