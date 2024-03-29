import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStats } from "state";
import { message } from "antd";
import _ from "lodash";
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Table,
  Switch,
  Select,
  Collapse,
} from "antd";
import { v4 as uuidv4 } from "uuid";

const EditableContext = React.createContext(null);


const isParticipantSelectedInSameType = (participantId, categoryId, categories) => {
  const category = categories.find((cat) => cat.id === categoryId);
  if (!category || !category.exclusive) {
    return false; // If the category doesn't exist or is not exclusive, return false
  }

  // Check if the participant is selected in another category of the same type
  return categories.some(
    (cat) =>
      cat.id !== categoryId &&
      cat.type === category.type &&
      cat.participants.includes(participantId)
  );
};

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

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
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

  const user = useSelector((state) => state.user);
  
  const save = async () => {
    try {
      const values = await form.validateFields();

      // Additional validation for number inputs
      if (dataIndex === "change" && isNaN(values[dataIndex])) {
        throw new Error(`${title} must be a number.`);
      }

      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
      replaceUser(user)
    } catch (errInfo) {
      // console.log("Save failed:", errInfo);
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
        {/* Render Input only when editing */}
        {dataIndex === "participants" ? (
          children // Keep the Select as it is
        ) : (
          <Input
            ref={inputRef}
            onPressEnter={save}
            onBlur={save}
            type={dataIndex === "change" ? "number" : "text"}
          />
        )}
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

const CategoryEditor = () => {
  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.user.categories);
  const participants = useSelector((state) => state.user.participants);
  const dispatch = useDispatch();
  const [selectedParticipants, setSelectedParticipants] = useState([]);

  const [dataSource, setDataSource] = useState(categories);
  const [count, setCount] = useState(categories.length);
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
    categories:user.categories
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

  useEffect(() => {
    setDataSource(categories);
  }, [categories]);

  const handleParticipantChange = (record, filteredSelectedParticipants) => {
    // Spread the filteredSelectedParticipants into the record.participants array
    const updatedRecord = {
      ...record,
      participants: [...filteredSelectedParticipants],
    };

    const clonedCategories = _.cloneDeep(categories);
    const categoryIndex = clonedCategories.findIndex(
      (category) => category.id === updatedRecord.id
    );

    if (categoryIndex !== -1) {
      clonedCategories[categoryIndex] = updatedRecord;
    }
    // console.log(updatedRecord);
    dispatch(setStats({ categories: clonedCategories }));
    setSelectedParticipants(updatedRecord);
  };

  const handleDelete = (id) => {
    const newData = dataSource.filter((item) => item.id !== id);
    setDataSource(newData);
    dispatch(setStats({ categories: newData }));
    replaceUser(user)
  };

  const handleToggle = (id, checked) => {
    const updatedData = dataSource.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          exclusive: checked,
        };
      }
      return item;
    });

    setDataSource(updatedData);
     dispatch(setStats({ categories: dataSource }));
  };

  const defaultColumns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "30%",
      editable: true,
    },
    {
      title: "Type",
      dataIndex: "type",
      width: "30%",
      editable: true,
    },
    {
      title: "Exclusive",
      dataIndex: "exclusive",
      render: (_, record) => (
        <Switch
          checked={record.exclusive}
          onChange={(checked) => handleToggle(record.id, checked)}
        />
      ),
    },

    {
      title: "Participants",
      dataIndex: "participants",
      width: "40%",
      editable: true,
      render: (_, record) => (
        <EditableCell
          title="Participants"
          editable
          dataIndex="participants"
          record={record}
          handleSave={handleSave}
        >
       <Select
  mode="multiple"
  placeholder="Select participants"
  maxTagCount="responsive"
  filterOption={false} // Disable option filtering
  allowClear
  style={{ width: "300px" }}
  value={record.participants} // Use record.participants
  onChange={(selectedParticipants) => {
    // Filter out the selected participants that don't have corresponding names
    const filteredSelectedParticipants = selectedParticipants.filter(
      (id) =>
        participants.some(
          (participant) =>
            participant.id === id &&
            participant.name !== "" &&
            !isParticipantSelectedInSameType(id, record.id, dataSource)
        )
    );
    handleParticipantChange(record, filteredSelectedParticipants); // Pass the record and filtered selected participants
  }}
>
  {participants
    .slice() // Create a copy of the participants array
    .sort((a, b) => b.stats[0].relevance - a.stats[0].relevance) // Sort by relevance in descending order
    .map((participant) => (
      <Select.Option
        key={participant.id}
        value={participant.id}
        disabled={
          isParticipantSelectedInSameType(participant.id, record.id, dataSource)
        }
      >
        {participant.name}
      </Select.Option>
    ))}
</Select>

        </EditableCell>
      ),
    },

    {
      title: "Operation",
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
   const newDate= new Date(2023, 6, 10, 15, 30)
    const newData = {
      id: uuidv4(),
      name: "Category" + 1,
      type: "Type",
      isActive: true, // Set the initial value to true
      participants: [1],
      logs: [
        {
          description: "An detailed description",
          rating: 50,
          date: newDate.toString(),
        },
      ],
    };
    setDataSource([...dataSource, newData]);
    // console.log('here');
    dispatch(setStats({ categories: [...dataSource, newData] }));
    setCount(count + 1);
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
    // console.log(newData);
    dispatch(setStats({ categories: newData }));
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
        render: col.render, // Keep the existing render function
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
        Add A Categrory
      </Button>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        expandable={{
          expandedRowRender: (record) => (
            <div>
              <h3>Logs:</h3>
              <Collapse>
                {record.logs.map((log, index) => (
                  <Collapse.Panel header={`Log ${index + 1}`} key={index}>
                    <div>
                      <p>Description: {log?.description}</p>
                      <p>Rating: {log?.segmentRating}</p>
                      <p>Date: {log?.date?.toString()}</p>
                    </div>
                  </Collapse.Panel>
                ))}
              </Collapse>
            </div>
          ),
          // ...
        }}
      />
    </div>
  );
};


export default CategoryEditor;
