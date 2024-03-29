import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input, Popconfirm, Table, Switch, message} from "antd";
import { setStats } from "state";
import { v4 as uuidv4 } from "uuid";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};


const ParticipantEditor = () => {
  const user = useSelector((state) => state.user);
  const stats = useSelector((state) => state.user.stats);
  const participants = useSelector((state) => state.user.participants);
  const dispatch = useDispatch();

  const [dataSource, setDataSource] = useState(participants);
  
  const handleDataUpdate = () => {
    setDataSource((prevData) => {
      // Create a new array with the same elements
      const newData = [...prevData];
      
      // Make your changes to newData
      console.log('Before modification:', newData);
  
      // For example: newData[0].stats.someStat = newValue;
  
      console.log('After modification:', newData);
  
      return newData; // Update the state with the new array
    });
  };
  
  const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
  
    const toggleEdit = () => {
      setEditing(!editing);
    };
  
    const save = async () => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({
          ...record,
          stats: record.stats.map((stat) =>
            stat.hasOwnProperty(dataIndex)
              ? { ...stat, [dataIndex]: values[dataIndex] }
              : { [dataIndex]: values[dataIndex] }
          ),
        });
        replaceUser(user);
      } catch (errInfo) {
        // Handle validation error if needed
      }
    };
    
  
    let childNode = children;
    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }
  
    return <td {...restProps}>{childNode}</td>;
  };
  
  useEffect(() => {
    setDataSource(participants);
    
  }, [participants]);
  const [count, setCount] = useState(participants.length);

  const uniqueStatNamesFromStats = Array.from(
    new Set(stats.map((stat) => stat.statName))
  );
  const uniqueStatNames = [...uniqueStatNamesFromStats, "relevance"];

  const handleDelete = (id) => {
    const newData = dataSource.filter((item) => item.id !== id);
    dispatch(setStats({ participants: newData }));
    setDataSource(newData);
    replaceUser(user)
  };

  const handleToggle = (id, checked) => {
    const updatedData = dataSource.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isActive: checked,
        };
      }
      return item;
    });
// console.log(updatedData);
    setDataSource(updatedData);
    dispatch(setStats({ participants: updatedData }));

  };

  const defaultColumns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "15%",
      editable: true,
      fixed: 'left',
    },
    {
      title: "Profile Image",
      dataIndex: "image",
      width: "10%",
      editable: true,
      ellipsis: true,
    },
    {
      title: "Active",
      dataIndex: "isActive",
      width: "8%",

      render: (_, record) => (
        <Switch
          checked={record.isActive}
          onChange={(checked) => handleToggle(record.id, checked)}
        />
      ),
    },
    ...uniqueStatNames.map((statName) => ({
      title: statName.charAt(0).toUpperCase() + statName.slice(1),
      dataIndex: statName,
      editable:true,
      sorter: (a, b) => {
        const statA = a.stats.find((s) => s.hasOwnProperty(statName));
        const statB = b.stats.find((s) => s.hasOwnProperty(statName));

        if (statA && statB) {
          return statA[statName] - statB[statName]; // You can customize the sorting logic here
        } else if (statA) {
          return -1; // Put rows with statA first
        } else if (statB) {
          return 1; // Put rows with statB first
        }

        return 0; // No stat found in both rows
      },
      filters: [
        { text: "0", value: 0 },
        // Add more filter options if needed
      ],
      onFilter: (value, record) =>
        record.stats.some((stat) => stat[statName] === parseInt(value)),
      render: (_, record) => {
        const stat = record.stats.find((s) => s.hasOwnProperty(statName));
        return stat ? stat[statName] : 0; // Display the stat value
      },
    })),

    {
      title: "Delete",
      fixed: 'right',
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleAdd = () => {
    const newData = {
      id: uuidv4(),
      name: `Patient ${count + 1}`,
      isActive: true, // Set the initial value to true
      bio: "A brief observation about the patient (here)",
      image:'https://i.redd.it/bwciyi6pd4rb1.png',
      stats: [{ relevance: 0 }, { "bloodGlucoseLevels": 85 },
      { "age": 35 },
      { "bmi": 21.7 },
      { "height": 170 },
      { "weight": 66 }, {sex:'Male'}],
    };
    setDataSource([...dataSource, newData]);
     dispatch(setStats({ participants: [...dataSource, newData] }));
    setCount(count + 1);
  };
  // Create an object to store editedBio state for each row
  const [editedBios, setEditedBios] = useState({});

  // ...

  // Function to toggle editing mode for a specific row
  const toggleEdit = (id) => {
    setEditedBios((prevEditedBios) => ({
      ...prevEditedBios,
      [id]: dataSource.find((item) => item.id === id)?.bio || "", // Initialize with the current bio
    }));
  };

  const [messageApi, contextHolder] = message.useMessage();         

  const replaceUser = async (user) => {
    const bodyData = {
      id: user._id,
    firstName: user.firstName,
    email: user.email,
    
    impressions: user.impressions,
    mainLogs: user.mainLogs,
    participants: user.participants,
    items: user.items,
    stats: user.stats,
    relationships: user.relationships,
    recentEvents: user.recentEvents,
    statPerception: user.statPerception,
    arcs: user.arcs,
    date: user.date,
    randomEvents: user.randomEvents,
    categories:user.categories,

    };
  
    try {
      // Display loading message
      messageApi.loading({ content: 'Replacing data...', key: 'replaceUserMessage' });
  
      const response = await fetch("https://hospital-patient-database-management.onrender.com/auth/replace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });
  
      const data = await response.json();
  
      // Display success message
      messageApi.success({ content: 'Data replaced successfully!', key: 'replaceUserMessage' });
            setTimeout(messageApi.destroy,2000);

  
      // console.log(data);
    } catch (error) {
      // Display error message
      messageApi.error({ content: 'Failed to replace data!', key: 'replaceUserMessage' });
            setTimeout(messageApi.destroy,2000);

      console.error("Error replacing user:", error);
    }
  };

  const handleSave = (row) => {
    const newData = dataSource.map((item) => {
      if (item.id === row.id) {
        return {
          ...item,
          ...row,
        };
      }
      return item;
    });
    setDataSource(newData);
    dispatch(setStats({ participants: newData }));
    replaceUser(user)
    // console.log(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
    {contextHolder}
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add A Patient
      </Button>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        scroll={{
      x: 700,
    }}
        expandable={{
          expandedRowRender: (record) => (
            <EditableBio
            initialBio={record.bio}
            editedBio={editedBios[record.id] || ""} // Pass editedBio for the specific row
            onSave={(editedBio) => handleSave({ ...record, bio: editedBio })}
            setEditedBio={(editedBio) => {
              // Update the editedBio for the specific row
              setEditedBios((prevEditedBios) => ({
                ...prevEditedBios,
                [record.id]: editedBio,
              }));
            }}
            toggleEdit={() => toggleEdit(record.id)} // Pass a function to toggle editing mode
          />
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
      />
    </div>
  );
};

const EditableBio = ({ initialBio, onSave, editedBio, setEditedBio, toggleEdit }) => {
  const [editing, setEditing] = useState(false);
  

  const toggleEditMode = () => {
    setEditing(!editing);
    if (!editing) {
      toggleEdit(); // Toggle editing mode in the parent component
    }
  };

  const handleBioChange = (e) => {
    setEditedBio(e.target.value); // Update editedBio in the parent component
  };

  const handleSaveBio = () => {
    onSave(editedBio);
    // console.log(editedBio);
    toggleEditMode();
  };

  return (
    <div>
      <p>
        {editing ? (
          <Input
            value={editedBio}
            onChange={handleBioChange}
            onPressEnter={handleSaveBio}
            onBlur={handleSaveBio}
          />
        ) : (
          editedBio || initialBio // Display editedBio if available, otherwise, display initialBio
        )}
      </p>
      <Button onClick={toggleEditMode}>{editing ? "Save" : "Edit"}</Button>
    </div>
  );
};

export default ParticipantEditor;
