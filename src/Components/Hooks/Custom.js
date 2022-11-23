import useSWR from "swr";
import axios from "axios";

const CONTACTS_URL = "http://localhost:3005/contacts";
const CATEGORIES_URL = "http://localhost:3005/categories";

const fetcher = async (url) => {
    const result = await axios
        .get(url);
    return result.data;
};

const useGet = (url) => {
 
    const { data, error } = useSWR(url, fetcher);

    return {
        result: data,
        isLoading: !data && !error,
        error: error
    }
}


const useContacts = (params = {id: 0, includeCategories: false}) => {
    let url = CONTACTS_URL;

    if(params.id > 0) {
        url += ("?id=" + params.id)
    }
    else if(params.includeCategories) {
        url += "?includeCategories=true";
    }

    const {data, error, mutate} = useSWR(url, fetcher);

    return {
        result: data,
        isLoading: !data && !error,
        error: error,
        mutate: mutate
    }
}

const useCategories = (params = {id: 0, includeContacts: false}) => {
    let url = CATEGORIES_URL;

    if(params.id > 0) {
        url += ("?id=" + params.id);
    }
    else if(params.includeContacts) {
        url += "?includeContacts=true";
    }

    const {data, error, mutate} = useSWR(url, fetcher);

    return {
        result: data,
        isLoading: !data && !error,
        error: error,
        mutate
    }
}

const useSubmit = (id = 0) => {
    let url = CONTACTS_URL;
    if(id > 0) {
        url += ("?id=" + id);

        return (e, submitData = {id: 0, name: "", surname: "", telephoneNum: "", categoryId: 0}, successFunction) => {
            e.preventDefault();
            axios.put(url,submitData).then(result => {
                if(result.data) {
                    successFunction();
                }
            });
        }
    }
    else {
        return (e, submitData = {name: "", surname: "", telephoneNum: "", categoryId: 0}, successFunction) => {
            e.preventDefault();
            axios.post(url,submitData).then(result => {
                if(result.data) {
                    successFunction();
                }
            });
        }
    }
}

const useDelete = (id = 0) => {
    const url = CONTACTS_URL + "?id=" + id;
    
    return (successFunction) => {
        axios.delete(url).then(result => {
            if(result.data) {
                successFunction();
            }
        });
    }
}

const useSubmitCategory = (id = 0) => {
    let url = CATEGORIES_URL;
    if(id > 0) {
        url += ("?id=" + id);

        return (e, submitData = {id: 0,name: ""}, successFunction) => {
            e.preventDefault();
            axios.put(url, submitData).then(result => {
                if(result.data) {
                    successFunction();
                }
            })
        }
    }else {
        return (e, submitData = {name: ""}, successFunction) => {
            e.preventDefault();
            axios.post(url, submitData).then(result => {
                if(result.data) {
                    successFunction();
                }
            })
        }
    }

}

const useDeleteCategory = (id = 0) => {
    const url = CATEGORIES_URL + "?id=" + id;
    
    return (successFunction) => {
        axios.delete(url).then(result => {
            if(result.data) {
                successFunction();
            }
        })
    }
}

export { useGet, useContacts, useCategories, useSubmit, useDelete, useSubmitCategory, useDeleteCategory, CONTACTS_URL, CATEGORIES_URL };